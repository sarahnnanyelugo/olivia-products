import React from "react";
import { NavLink } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import "./top-nav.scss";
import Logo from "../../assets/images/logo2.png";

// Define types for props
interface MiddleProps {
  cart: {
    id: string;
    productName: string;
    firstImg: string;
    productPrice: number;
    quantity: number;
  }[];
  openCart: () => void;
}

export const Middle: React.FC<MiddleProps> = ({ cart, openCart }) => {
  return (
    <>
      <div className="middle-nav-div d-flex">
        <ul className="list-unstyled list-inline col-md-4">
          <li className="list-inline-item">
            <NavLink to={"/"}>Shop</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/"}>Holiday Shop</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"/"}>How it works</NavLink>
          </li>
        </ul>

        <div className="col-md-4">
          <center>
            <div className="col-md-8">
              <img src={Logo} className="col-md-2" width="" />
            </div>
          </center>
        </div>

        {/* Button to open the cart */}
        <div className="col-md-4 d-flex justify-content-end">
          <button
            onClick={openCart}
            className="btn btn-primary"
            style={{ marginTop: "10px" }}
          >
            View Cart
          </button>
        </div>
      </div>

      {/* Offcanvas to show cart preview */}
      <Offcanvas show={cart.length > 0} onHide={() => {}} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Preview</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} style={{ marginBottom: "1rem" }}>
                <img
                  src={item.firstImg}
                  alt={`Product ${item.id}`}
                  style={{ width: "50px", marginRight: "1rem" }}
                />
                <div>
                  <p>{item.productName}</p>
                  <p>${(item.productPrice * item.quantity).toFixed(2)}</p>
                  <span>Quantity: {item.quantity}</span>
                </div>
              </div>
            ))
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
