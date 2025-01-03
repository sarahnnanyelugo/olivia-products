import React from "react";
import "./contact-us.scss";
import { OrderDetails } from "./OrderDetails";
export const ContactUs = () => {
  return (
    <div style={{ marginTop: "200px" }} className="col-md-6 offset-md-3 ">
      <OrderDetails />
      <form className="contact-form">
        <h4>Contact us</h4>
        <div className="contact-form-inner">
          <h6>
            Full Name<span>*</span>
          </h6>
          <input />
        </div>
      </form>
    </div>
  );
};
