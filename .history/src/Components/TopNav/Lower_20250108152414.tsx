import React from "react";
import { NavLink } from "react-router-dom";

export const Lower = () => {
  return (
    <div className="lower-nav-div">
      <center>
        <ul className="list-inline list-unstyled">
          <li className="list-inline-item">
            <NavLink to={"/wholesale-page"}>Wholesale</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/wholesale-page"}>Distribution</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/wholesale-page"} style={{ color: "green" }}>
              Retail
            </NavLink>
          </li>{" "}
          <span>||</span>
          <li className="list-inline-item">
            <NavLink to={"/collections?category=hand-soap"}>Hand Soap</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/collections?category=dish-wash"}>Dish</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/collections?category=Laundry"}>Laundry</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/collections?category=toilet-Wash"}>Toilet</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/"}>Spray Cleaners</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/collections?category=personal-care"}>
              Personal Care
            </NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/collections?category=Shampoo"}>Shampoo</NavLink>
          </li>
        </ul>
      </center>
    </div>
  );
};
