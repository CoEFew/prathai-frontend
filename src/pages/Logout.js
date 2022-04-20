import React, { Component, useEffect, useReducer, useState } from "react";
import { useHistory } from "react-router-dom";

function Logout() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();
  function logOut() {
    localStorage.clear();
    history.push("/");
  }
  return (
    <div>
      {localStorage.getItem("user-info") ? (
        <button
          className="btn text-light"
          title={user && user.name}
          onClick={logOut}
        >
          Logout
        </button>
      ) : null}
    </div>
  );
}

export default Logout;
