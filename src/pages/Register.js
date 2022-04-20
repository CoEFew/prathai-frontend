import React, { Component, useEffect, useReducer, useState } from "react";
import { NavLink, Nav, NavDropdown } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Register() {

    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            history.push("/")
        }
    },[])
    

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [first_name, setFirstname] = useState("");
    const [last_name, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    async function signUp() {
        let item={username,email,first_name,last_name,password}
        console.warn(item)

        let result= await  fetch("http://prathai-avc.eba-34rcm7su.ap-southeast-1.elasticbeanstalk.com/api/register/" ,{
            method: 'POST',
            body: JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":'application/json'
              }
        })
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/")
    }

  return (
    <div>
      {/* <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder="Username" />
      <br />
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" />
      <br />
      <input type="text" value={first_name} onChange={(e)=>setFirstname(e.target.value)} className="form-control" placeholder="First name" />
      <br />
      <input type="text" value={last_name} onChange={(e)=>setLastname(e.target.value)} className="form-control" placeholder="Last name" />
      <br />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" />
      <br />
      <button onClick={signUp} className="btn">Register</button> */}

      <div
        className="modal fade"
        id="register"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{ borderRadius: "10px" }}>
            <div className="modal-header border-bottom-0">
              <button
                type="button"
                className="close"
                style={{ fontSize: "3rem", padding: "0 1rem 0 1rem" }}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{ padding: "0 1rem 1rem 1rem" }}>
              <h5 className="text-center font-weight-bold mb-4">สมัครสมาชิก</h5>
              <h5 className="font-size15">Username</h5>
              <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control mb-3"
                style={{ borderRadius: "15px" }} placeholder="Username" />
              <h5 className="font-size15">
              Email
              </h5>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control mb-3" style={{ borderRadius: "15px" }} placeholder="Email" />
              <h5 className="font-size15">
              First name
              </h5>
              <input type="text" value={first_name} onChange={(e)=>setFirstname(e.target.value)} className="form-control mb-3" style={{ borderRadius: "15px" }} placeholder="First name" />
              <h5 className="font-size15">Last name</h5>
              <input type="text" value={last_name} onChange={(e)=>setLastname(e.target.value)} className="form-control mb-3" style={{ borderRadius: "15px" }} placeholder="Last name" />
              <h5 className="font-size15">Password</h5>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control mb-3" style={{ borderRadius: "15px" }} placeholder="Password" />
              <button
              onClick={signUp}
                className="btn text-center w-100 text-light mt-3 mb-2"
                style={{ backgroundColor: "#d09b2c", borderRadius: "15px" }}
              >
                สมัครสมาชิก
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
