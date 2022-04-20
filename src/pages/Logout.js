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

      {/* <a
        className="nav-link dropdown-toggle btn rounded-pill"
        style={{
          color: "#d09b2c",
          width: "80px",
          backgroundColor: "#f0ebe1",
        }}
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        title={user && user.name}
      ></a>
      <div
        className="dropdown-menu"
        style={{ minWidth: "5rem" }}
        aria-labelledby="navbarDropdown"
      >
        <a className="dropdown-item" onClick={logOut}>
          Logout
        </a>
      </div> */}
    </div>
  );
}

export default Logout;
