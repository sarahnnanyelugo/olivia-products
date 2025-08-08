import React from "react";
import "./contact-us.scss";
import { FaPaperclip } from "react-icons/fa"; // Using an icon from react-icons
import Hero from "../../assets/images/contact-icons.png";

import { Col, Row } from "react-bootstrap";
export const ContactUs = () => {
  return (
    <div className="col-md-12">
      <div className="contact-hero d-flex">
        <h1 className="offset-md-1">Contact Us</h1>
     
      </div>
   
      <div className=" d-md-flex contact-info col-md-10 offset-md-1">
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
        <div className="col-md-5 gf-cova" >
          <div className="general-info">
            <h4>Olivia Products Nigeria Ltd</h4>
            <p>Location:KM 8 Hadejia Road, Kano, Nigeria

</p>
<p>Contact:
:</p>
<ul>
  <li><span>Lagos:</span>+234 901 419 6902</li>
  <li><span>Whatsapp:</span> +234 912 350 9090</li>
  <li><span>Monday - Friday:</span>8am - 5pm</li>
  <h5>Write to us:</h5>
  <li><span>General Enquiries</span> customercare@olivia.com</li>
  <li><span>Sales Enquiries</span> sales@olivia.com</li>
  <li><span>Supplier Enquiries</span> purchases@aolivia.com</li>
  
  </ul>
  <h5>Follow us on:</h5>
          </div>
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
