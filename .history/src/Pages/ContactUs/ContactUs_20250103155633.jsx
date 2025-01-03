import React from "react";
import "./contact-us.scss";
import { OrderDetails } from "./OrderDetails";
export const ContactUs = () => {
  return (
    <div style={{ marginTop: "200px" }} className="col-md-8 offset-md-2">
      <OrderDetails />
    </div>
  );
};
