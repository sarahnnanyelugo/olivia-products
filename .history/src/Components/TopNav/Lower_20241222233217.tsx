import React from "react";
import { NavLink } from "react-router-dom";

export const Lower = () => {
  return (
    <div className="lower-nav-div">
      <center>
        <ul className="list-inline list-unstyled">
          <li className="list-inline-item">
            <NavLink to={"/"}></NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/"}></NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/"}></NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/"}></NavLink>
          </li>
        </ul>
      </center>
    </div>
  );
};
