import React from "react";
import { Col, Row } from "react-bootstrap";

export const OrderForm = () => {
  return (
    <form className="order-form col-md-4 offset-md-4">
      <h5>Enter the email or phone number used to place your order</h5>
      <Row>
        <Col>
          <input placeholder="Email" />
        </Col>
        <Col>
          <input placeholder="SMS" />
        </Col>
      </Row>
      <h6>Email</h6>
      <input placeholder="email@domain.com" />
      <button>Send</button>
    </form>
  );
};
