import React from "react";
import { NavLink } from "react-router-dom";

export const Lower = () => {
  return (
    <div className="lower-nav-div">
      <center>
        <ul className="list-inline list-unstyled">
          <li>
            <NavLink to={"/"}></NavLink>
          </li>
        </ul>
      </center>
    </div>
  );
};
