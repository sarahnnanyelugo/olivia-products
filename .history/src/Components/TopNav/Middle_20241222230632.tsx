import React from "react";
import { NavLink } from "react-router-dom";
import "./top-nav.scss";
import Logo from "../../assets/images/logo.png";

export const Middle = () => {
  return (
    <>
      <div className="middle-nav-div d-flex">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <NavLink to={"/"}>Shop</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/"}>Holiday Shop</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/"}>How it works</NavLink>
          </li>
        </ul>
        <center>
          <img src={Logo} className="col-md-2" />
        </center>
      </div>
    </>
  );
};
