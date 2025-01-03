import React from "react";
import "./contact-us.scss";
import { FaPaperclip } from "react-icons/fa"; // Using an icon from react-icons

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
          <div className="file-input-wrapper">
            <input type="file" id="fileInput" className="file-input" />
            <label htmlFor="fileInput" className="file-input-label">
              <FaPaperclip className="file-input-icon" />
              Attach File
            </label>
          </div>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};
