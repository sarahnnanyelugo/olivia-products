import React from "react";
import { NavLink } from "react-router-dom";
import "./top-nav.scss";

export const Middle = () => {
  return (
    <>
      <div className="middle-nav-div">
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
      </div>
    </>
  );
};
