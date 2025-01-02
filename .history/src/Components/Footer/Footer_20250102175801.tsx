import React from "react";
import "./footer.scss";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-top" />
      <div className="footer-inner d-md-flex">
        <div className="col-md-4 col-12 ">
          <h3>Our emails are zero waste, too</h3>
          <p>
            Subscribe to get exclusive deals, zero waste tips, and product
            launches—no spam, no waste.
          </p>
          <div className="input-holder d-flex">
            {" "}
            <input placeholder="Email Address" />
            <button className="sub-btn">
              <BsArrowRight />
            </button>
          </div>
          <small>
            By signing up, you consent to our{" "}
            <Link to={""}>Privacy Policy</Link>. You may unsubscribe at any
            time.
          </small>
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <Link to={""}>
                <FaSquareInstagram />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to={""}></Link>
            </li>
            <li className="list-inline-item">
              <Link to={""}></Link>
            </li>
          </ul>
        </div>
        <div className="col-md-7 col-12 d-flex offset-md-1">
          <div className="col-4">ccddfdf</div>
          <div className="col-4">ccddfdf</div>
          <div className="col-4">ccddfdf</div>
        </div>
      </div>
    </footer>
  );
};
