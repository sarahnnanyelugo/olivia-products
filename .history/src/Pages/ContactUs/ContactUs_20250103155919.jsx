import React from "react";
import "./contact-us.scss";
import { OrderDetails } from "./OrderDetails";
export const ContactUs = () => {
  return (
    <div style={{ marginTop: "200px" }} className="col-md-6 offset-md-3">
      <OrderDetails />
    </div>
  );
};