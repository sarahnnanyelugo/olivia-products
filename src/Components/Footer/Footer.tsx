import React from "react";
import "./footer.scss";
import { BsArrowRight } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-top" />
      <div className="footer-inner">
        <div className=" d-md-flex">
          <div className="col-md-3 col-12 ">
            <h3>Our emails are zero waste, too</h3>
            <p>
              Subscribe to get exclusive deals, zero waste tips, and product
              launches—no spam, no waste.
            </p>
            <div className="input-holder d-flex">
              {" "}
              <input placeholder="Email Address" />
              <button className="sub-btn">
                <BsArrowRight id="arrow" />
              </button>
            </div>
            <small className="sign-off ">
              By signing up, you consent to our{" "}
              <Link to={""}>Privacy Policy</Link>. You may unsubscribe at any
              time.
            </small>
            <ul className="list-unstyled list-inline socials">
              <li className="list-inline-item">
                <Link to={""}>
                  <FaSquareInstagram />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={""}>
                  <FaFacebook />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={""}>
                  <FaTiktok />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-12 d-flex offset-md-2">
            <div className="col-4">
              <ul className="list-unstyled footer-links">
                <h5>Shop</h5>
                <li>
                  <NavLink to={"/collections?category=*"}>All</NavLink>
                </li>
                <li>
                  <NavLink to={"/collections?category=dish-wash"}>Dish Wash</NavLink>
                </li>
                <li>
                  <NavLink to={"/collections?category=air-freshener"}>Air Fresheners</NavLink>
                </li>
                <li>
                  <NavLink to={"/collections?category=shampoo"}>Hair Care</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-4">
              {" "}
              <ul className="list-unstyled footer-links">
                <h5>About</h5>
                <li>
                  <NavLink to={"/our-mission"}>Our Mission</NavLink>
                </li>
                <li>
                  <NavLink to={""}>Careers</NavLink>
                </li>
                <li>
                  <NavLink to={"/wholesale-page"}>Wholesale Inquiries</NavLink>
                </li>
                
              </ul>
            </div>
            <div className="col-4">
              {" "}
              <ul className="list-unstyled footer-links">
                <h5>Help</h5>
                <li>
                  <NavLink to={"/contact-us"}>Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to={""}>Returns & Exchanges</NavLink>
                </li>
                <li>
                  <NavLink to={"/faqs"}>FAQ</NavLink>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
        <div className="d-md-flex">
          <ul
            className="list-unstyled list-inline sign-off"
            style={{ flexGrow: 1 }}
          >
            <li className="list-inline-item">Copyright 2025 Olivia Products</li>
            <li className="list-inline-item">
              <NavLink to={""}>Terms & Conditions</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink to={""}>Privacy Policy</NavLink>
            </li>
          </ul>
          <p>Powered by Hexxondiv Tech Hub</p>
        </div>
      </div>
    </footer>
  );
};
