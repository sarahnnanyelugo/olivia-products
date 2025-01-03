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
          <input />{" "}
          <h6>
            Email<span>*</span>
          </h6>
          <input />{" "}
          <h6>
            Subject<span>*</span>
          </h6>
          <input />{" "}
          <h6>
            Message<span>*</span>
          </h6>
          <textarea />
        </div>
      </form>
    </div>
  );
};
