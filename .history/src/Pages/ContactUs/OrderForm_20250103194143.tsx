import React from "react";
import { Col, Row } from "react-bootstrap";

export const OrderForm = () => {
  return (
    <form className="order-form col-md-4 offset-md-4">
      <h4>Enter the email or phone number used to place your order</h4>
      <Row>
        <Col>
          <div className="input-wrap d-flex">
            <input type="checkbox" />
            <input placeholder="Email" type="text" />
          </div>
        </Col>
        <Col className="input-wrap d-flex">
          <input type="checkbox" />
          <input placeholder="SMS" type="text" />
        </Col>
      </Row>
      <h6>Email</h6>
      <input placeholder="email@domain.com" style={{ width: "100%" }} />
      <button>Sign in</button>
    </form>
  );
};
