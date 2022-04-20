import React, { Component, useEffect, useReducer, useState } from "react";
import { useHistory } from "react-router-dom";

// const Login = () => {
//   return <div>Login</div>;
// };

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/");
    }
  }, []);
  async function login() {
    console.warn(username, password)
    let item={username, password};
    let result= await fetch("http://prathai-avc.eba-34rcm7su.ap-southeast-1.elasticbeanstalk.com/api/login/",{
      method: 'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":'application/json'
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    history.push("/")
  }
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        className="form-control"
      />
      <br />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
      />
      <br />
      <button className="btn " onClick={login}>
        Login
      </button>
    </div>
  );
}

export default Login;
