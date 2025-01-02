import React from "react";
import { NavLink } from "react-router-dom";

export const Middle = () => {
  return (
    <>
      <div className="middle-nav-div">
        <ul className="list-unstyled list-inline">
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
      </div>
    </>
  );
};
