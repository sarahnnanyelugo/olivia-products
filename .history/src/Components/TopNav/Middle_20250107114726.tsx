import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./top-nav.scss";
import Logo from "../../assets/images/logo.png";
import { useCart } from "../../CartContext";
import { GrCart } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export const Middle: React.FC = () => {
  const { setIsOffCanvasOpen, cart } = useCart(); // Access cart from the context
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen2, setIsOpen2] = useState(false);
  const toggleMenu2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <>
      <div className="middle-nav-div d-flex align-items-center">
        <ul className="list-unstyled list-inline col-md-4 navs">
          <li className="list-inline-item  top-mega-menu">
            <button onClick={toggleMenu} className="shop-btn">
              Shop <FaAngleDown />
            </button>
            <div className={`mega-menu ${isOpen ? "open" : ""}`}>
              {/* Menu content goes here */}
              <div className="menu-content ">
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

        <div className="top-mega-menu2">
          {" "}
          <IoSearch onClick={toggleMenu2} className="menu-search" />
          <div className={`mega-menu  ${isOpen2 ? "open" : ""}`}>
            {/* Menu content goes here */}
            <div className="menu-content col-md-12">
              <div className=" col-md-8 offset-md-2">
                <div className="d-flex">
                  <h6 style={{ flexGrow: 1 }}>WHAT ARE YOU LOOKING FOR</h6>
                  <IoClose
                    onClick={toggleMenu2}
                    style={{ color: "#000", fontSize: "20px" }}
                  />
                </div>
                <div className="d-flex search-box ">
                  <IoSearch className="search-icon" />
                  <input type="search" placeholder="Search" />
                </div>
              </div>
            </div>
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