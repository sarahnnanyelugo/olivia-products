import React from "react";
import { NavLink } from "react-router-dom";

export const Lower = () => {
  return (
    <div className="lower-nav-div">
      <center>
        <ul className="list-inline list-unstyled">
          <li className="list-inline-item">
            <NavLink to={"/"}>Starter Kits</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/"}>Refills</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/"}>Bestsellers</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/"}>Hand Soap</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/"}>Dish</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/collections?category=Laundry"}>Laundry</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/"}>Toilet</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/"}>Spray Cleaners</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/"}>Personal Care</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/"}>Extras</NavLink>
          </li>
        </ul>
      </center>
    </div>
  );
};
