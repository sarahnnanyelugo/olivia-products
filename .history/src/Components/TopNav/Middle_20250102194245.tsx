import React from "react";
import { NavLink } from "react-router-dom";
import "./top-nav.scss";
import Logo from "../../assets/images/logo2.png";
import { useCart } from "../../CartContext";
import { GrCart } from "react-icons/gr";

export const Middle: React.FC = () => {
  const { setIsOffCanvasOpen, cart } = useCart(); // Access cart from the context
  function middle() {
    window.alert("clicked");
  }
  return (
    <>
      <div className="middle-nav-div d-flex align-items-center">
        <ul className="list-unstyled list-inline col-md-4 navs">
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
        <div className="col-md-4 col-2">
          <center>
            <div className="col-md-8">
              <img src={Logo} className="col-md-2" width="100%" />
            </div>
          </center>
        </div>
        <div style={{ flexGrow: 1 }} />
        {/* Cart Icon with Item Count */}
        <div
          style={{ position: "relative", cursor: "pointer" }}
          onClick={() => setIsOffCanvasOpen(true)}
        >
          <GrCart size={30} /> {/* Adjust the icon size as needed */}
          {cart.length > 0 && ( // Show count only if cart has items
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {cart.length}
            </span>
          )}
        </div>
      </div>
    </>
  );
};
