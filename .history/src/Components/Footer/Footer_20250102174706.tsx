import React from "react";
import "./footer.scss";
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
            <input />
            <button className="sub-btn">Subscribe</button>
          </div>
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
