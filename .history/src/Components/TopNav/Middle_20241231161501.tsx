import React from "react";
import { NavLink } from "react-router-dom";
import "./top-nav.scss";
import Logo from "../../assets/images/logo2.png";

// Accept openCart function from TopNav
export const Middle = ({ openCart }) => {
  return (
    <>
      <div className="middle-nav-div d-flex">
        <ul className="list-unstyled list-inline col-md-4">
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

        <div className="col-md-4">
          <center>
            <div className="col-md-8">
              <img src={Logo} className="col-md-2" width="" />
            </div>
          </center>
        </div>

        {/* Add a button to open the cart */}
        <div className="col-md-4 d-flex justify-content-end">
          <button
            onClick={openCart}
            className="btn btn-primary"
            style={{ marginTop: "10px" }}
          >
            View Cart
          </button>
        </div>
      </div>
    </>
  );
};
