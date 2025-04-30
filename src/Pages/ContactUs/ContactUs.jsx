import React from "react";
import "./contact-us.scss";
import { FaPaperclip } from "react-icons/fa"; // Using an icon from react-icons
import Hero from "../../assets/images/contact-icons.png";

import { OrderDetails } from "./OrderDetails";
import { Col, Row } from "react-bootstrap";
export const ContactUs = () => {
  return (
    <div className="col-md-12">
      <div className="contact-hero d-flex">
        <h1 className="offset-md-1">Contact Us</h1>
        <img src={Hero} width="100%" alt="" />
      </div>
      {/* <OrderDetails /> */}
      <div className=" d-flex contact-info">
        <div className="col-md-7">
          <form className="contact-form">
            {" "}
            <h2>We Want to hear from you</h2>
            <div className="contact-form-inner">
              <Row>
                <Col>
                  {" "}
                  <h6>
                    Full Name<span>*</span>
                  </h6>
                  <input />{" "}
                </Col>
                <Col>
                  <h6>Email</h6>
                  <input />{" "}
                </Col>
              </Row>{" "}
              <Row>
                <Col>
                  <h6>
                    Phone num<span>*</span>
                  </h6>
                  <input />{" "}
                </Col>
                <Col>
                  {" "}
                  <h6>Address</h6>
                  <input />{" "}
                </Col>
              </Row>{" "}
              <h6>
                Message<span>*</span>
              </h6>
              <textarea />
              <button>Send</button>
            </div>
          </form>
        </div>
        <div className="col-md-5 " style={{ paddingLeft: "30px" }}>
          <div className="general-info"></div>
        </div>
      </div>
      <div className="col-md-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126860.31946982247!2d3.5211543544462436!3d6.47282276268744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x103bf73e807b9625%3A0x196ba6c7ae623509!2sLekki%20-%20Epe%20Expy%2C%20Ajah%2C%20Lagos%20106104%2C%20Lagos!3m2!1d6.472829399999999!2d3.6035562999999997!5e0!3m2!1sen!2sng!4v1745976278173!5m2!1sen!2sng"
          height="450"
          width="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
