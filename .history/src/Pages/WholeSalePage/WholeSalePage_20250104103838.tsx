import React from "react";
import "./wholesale-page.scss";
import Logo from "../../assets/images/logo.jpg";
import { Row } from "react-bootstrap";

export const WholeSalePage = () => {
  return (
    <div className="wholesale-page col-md-6 offset-md-3">
      <form>
        <div className="col-md-2">
          {" "}
          <img src={Logo} width="100%" />
        </div>
        <h6>Name</h6>
        <Row>
          <Col></Col>
        </Row>
      </form>
    </div>
  );
};