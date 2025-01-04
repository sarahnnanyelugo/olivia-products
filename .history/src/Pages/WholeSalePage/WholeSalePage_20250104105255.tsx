import React from "react";
import "./wholesale-page.scss";
import Logo from "../../assets/images/logo.png";
import { Row, Col } from "react-bootstrap";

export const WholeSalePage = () => {
  return (
    <div className="wholesale-page col-md-6 offset-md-3">
      <form>
        <div className="col-md-2">
          {" "}
          <img src={Logo} width="70%" />
        </div>
        <h6>
          Name<span>*</span>
        </h6>
        <Row>
          <Col>
            <input placeholder="FIrst Name" type="text" />
          </Col>
          <Col>
            <input placeholder="Second Name" type="text" />
          </Col>
        </Row>{" "}
        <h6>
          Contact<span>*</span>
        </h6>
        <Row>
          <Col>
            <input placeholder="Email" type="text" />
          </Col>
          <Col>
            <input placeholder="Phone Num" type="tel" />
          </Col>
        </Row>
        <h6>
          Business Name <span>*</span>
        </h6>
        <input placeholder="Registered business name" type="text" />
      </form>
    </div>
  );
};
