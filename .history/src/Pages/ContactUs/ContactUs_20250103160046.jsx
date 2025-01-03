import React from "react";
import "./contact-us.scss";
import { OrderDetails } from "./OrderDetails";
export const ContactUs = () => {
  return (
    <div
      style={{ marginTop: "200px" }}
      className="col-md-6 offset-md-3 contact-form"
    >
      <OrderDetails />
      <form className="contact-form">
        <h5>Contact us</h5>
      </form>
    </div>
  );
};
