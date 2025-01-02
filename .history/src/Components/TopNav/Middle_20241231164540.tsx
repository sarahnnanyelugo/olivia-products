// Middle.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./top-nav.scss";
import Logo from "../../assets/images/logo2.png";

interface MiddleProps {
  openCart: () => void; // Function passed from TopNav to trigger cart offcanvas
}

export const Middle: React.FC<MiddleProps> = ({ openCart }) => {
  return (
    <>
      <div className="middle-nav-div d-flex">
        <ul className="list-unstyled list-inline col-md-4">
          <li className="list-inline-item">
            <NavLink to={"/"}>Shop</NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink to={"/"}>Holiday Shop</NavLink>
          </li>
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
        <button onClick={openCart}>View Cart</button>{" "}
        {/* Button to trigger the cart */}
      </div>
    </>
  );
};
