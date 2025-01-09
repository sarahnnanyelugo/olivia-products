import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./top-nav.scss";
import Logo from "../../assets/images/logo.png";
import All from "../../assets/images/all.jpeg";
import { useCart } from "../../CartContext";
import { GrCart } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Desktop, TabletAndBelow } from "../../Utils/mediaQueries";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export const Middle: React.FC = () => {
  const { setIsOffCanvasOpen, cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null); // Ref for the mega menu container

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false); // Close the menu if clicked outside
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
      document.addEventListener("mousedown", handleClickOutside); // Listen for clicks outside
    } else {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("mousedown", handleClickOutside); // Clean up the listener
    }
    return () => {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("mousedown", handleClickOutside); // Clean up on unmount
    };
  }, [isOpen]);

  const [isOpen2, setIsOpen2] = useState(false);
  const toggleMenu2 = () => {
    setIsOpen2((prev) => !prev);
  };

  return (
    <>
      <Desktop>
        {" "}
        <div className="middle-nav-div d-flex align-items-center">
          <ul className="list-unstyled list-inline col-md-4 navs">
            <li className="list-inline-item top-mega-menu" ref={menuRef}>
              <button onClick={toggleMenu} className="shop-btn">
                Shop <FaAngleDown />
              </button>
              <div className={`mega-menu ${isOpen ? "open" : ""}`}>
                {/* Menu content goes here */}
                <div className="menu-content col-md-12 d-flex">
                  <div className="col-md-6">
                    <img src={All} className="col-md-12" />
                  </div>
                  <div className="col-md-5 offset-md-1 d-md-flex">
                    <div className="col-md-6">
                      <ul className="list-unstyled">
                        <li onClick={toggleMenu}>
                          <NavLink to={"/collections?category=*"}>
                            Shop All
                          </NavLink>
                        </li>
                        <li onClick={toggleMenu}>
                          <NavLink to={"/"}>Best Sellers</NavLink>
                        </li>
                        <li onClick={toggleMenu}>
                          <NavLink to={"/"}>Starter Kits</NavLink>
                        </li>
                        <li onClick={toggleMenu}>
                          <NavLink to={"/"}>Refills</NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 first-ul d-flex">
                      <ul className="list-unstyled ">
                        {" "}
                        <li onClick={toggleMenu}>
                          <NavLink to={"/collections?category=hand-soap"}>
                            Hand Soap
                          </NavLink>
                        </li>
                        <li onClick={toggleMenu}>
                          <NavLink to={"/collections?category=dish-wash"}>
                            Dish Wash
                          </NavLink>
                        </li>
                        <li onClick={toggleMenu}>
                          <NavLink to={"/collections?category=Laundry"}>
                            Laundry
                          </NavLink>
                        </li>
                        <li onClick={toggleMenu}>
                          <NavLink to={"/collections?category=toilet-Wash"}>
                            Toilet Wash
                          </NavLink>
                        </li>
                        <li onClick={toggleMenu}>
                          <NavLink to={"/collections?category=Shampoo"}>
                            Shampoo
                          </NavLink>
                        </li>
                        <li onClick={toggleMenu}>
                          <NavLink to={"/collections?category=personal-care"}>
                            Personal Care
                          </NavLink>
                        </li>
                        <li onClick={toggleMenu}>
                          <NavLink to={"/collections?category=hair-care"}>
                            Hair Care
                          </NavLink>
                        </li>
                        <li onClick={toggleMenu}>
                          <NavLink to={"/collections?category=extras"}>
                            Extras
                          </NavLink>
                        </li>
                      </ul>{" "}
                      <IoClose
                        onClick={toggleMenu}
                        style={{ color: "red", fontSize: "25px" }}
                      />
                    </div>
                  </div>
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
          <NavLink to={"/"}>Blog</NavLink>

          <div className="top-mega-menu2">
            <IoSearch onClick={toggleMenu2} className="menu-search" />
            <div className={`mega-menu ${isOpen2 ? "open" : ""}`}>
              <div className="menu-content col-md-12">
                <div className="col-md-8 offset-md-2">
                  <div className="d-flex">
                    <h6 style={{ flexGrow: 1 }}>WHAT ARE YOU LOOKING FOR</h6>
                    <IoClose
                      onClick={toggleMenu2}
                      style={{ color: "#000", fontSize: "20px" }}
                    />
                  </div>
                  <div className="d-flex search-box">
                    <IoSearch className="search-icon" />
                    <input type="search" placeholder="Search" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ position: "relative", cursor: "pointer" }}>
            <GrCart size={30} onClick={() => setIsOffCanvasOpen(true)} />
            {cart.length > 0 && (
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
      </Desktop>

      <TabletAndBelow>
        <div className="mobile-view">
          <div className="mobile-nav d-flex">
            <div className="col-md-1">
              <img src={Logo} className="col-md-12" />
            </div>
            <div className="phone">
              <div className="menu">
                <div className="options">
                  <div className="option selected">Home</div>
                  <div
                    className="option"
                    onClick={() => {
                      document
                        .querySelector(".phone")
                        ?.classList.toggle("active");
                    }}
                  >
                    About
                  </div>
                  <div className="option">Products</div>
                  <div className="option">Contact</div>
                </div>
              </div>

              <div
                className="menu-click-area"
                onClick={() => {
                  document.querySelector(".phone")?.classList.toggle("active");
                }}
              >
                {/* <svg
                className="x"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 220 400"
                height="400"
                width="220"
              >
                <g className="top-bars" stroke-width="4">
                  <path className="bar bar1" d="M 178,20 H 202" />
                  <path className="bar bar2" d="M 178,29 H 202" />
                </g>
              </svg> */}
                <HiOutlineMenuAlt4 className="menu-icon " />
              </div>
            </div>
          </div>
        </div>
      </TabletAndBelow>
    </>
  );
};
