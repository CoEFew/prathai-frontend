import React, { Component, useEffect, useReducer, useState } from "react";
import { NavLink, Nav, NavDropdown } from "react-router-dom";
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
      <Nav>
        <NavDropdown title={user && user.name}>
          <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      {localStorage.getItem("user-info") ? (
        <button className="btn " title={user && user.name} onClick={logOut}>
          Logout
        </button>
      ) : null}
    </div>
  );
}

export default Logout;
