import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./top-nav.scss";
import Logo from "../../assets/images/logo.png";
import { useCart } from "../../CartContext";
import { GrCart } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";

export const Middle: React.FC = () => {
  const { setIsOffCanvasOpen, cart } = useCart(); // Access cart from the context
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="middle-nav-div d-flex align-items-center">
        <ul className="list-unstyled list-inline col-md-4 navs">
          <li className="list-inline-item mega-menu">
            <button onClick={toggleMenu}>Shop</button>
            <div className={`mega-menu ${isOpen ? "open" : ""}`}>
              {/* Menu content goes here */}
              <div className="menu-content">
                <h1>Mega Menu</h1>
                <p>This is your mega menu content area.</p>
              </div>
            </div>
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
            <Link to={"/"} className="">
              <img src={Logo} className="col-md-1" />
            </Link>
          </center>
        </div>
        <div style={{ flexGrow: 1 }} />
        <NavLink to={"/about-us"}>About Us</NavLink>
        <NavLink to={"/our-mission"}>Our Mission</NavLink>

        <IoSearch onClick={toggleMenu} />
        <div className={`mega-menu ${isOpen ? "open" : ""}`}>
          {/* Menu content goes here */}
          <div className="menu-content">
            <h1>Mega Menu 2</h1>
            <p>This is your mega menu content area.</p>
          </div>
        </div>
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
