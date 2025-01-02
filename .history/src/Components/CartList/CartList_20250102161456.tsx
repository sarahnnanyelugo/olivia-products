import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useCart } from "../../CartContext";
import "./cart-list.scss";
import { MdDelete } from "react-icons/md";

const CartOffcanvas: React.FC = () => {
  const {
    cart,
    isOffCanvasOpen,
    setIsOffCanvasOpen,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  const calculateTotalPrice = () =>
    cart.reduce((total, item) => total + item.productPrice * item.quantity, 0);

  return (
    <Offcanvas
      show={isOffCanvasOpen}
      onHide={() => setIsOffCanvasOpen(false)}
      placement="end"
      style={{ width: "30%" }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              style={{ marginBottom: "1rem" }}
              className="d-flex item-list"
            >
              <img
                className="col-md-2"
                src={item.firstImg}
                alt={item.productName}
                style={{ marginRight: "1rem" }}
              />
              <div style={{ flexGrow: 1 }} className="mt-2">
                <p>{item.productName}</p>
                <p>${(item.productPrice * item.quantity).toFixed(2)}</p>
                <div style={{}} className="mt-4">
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                </div>
              </div>

              <MdDelete
                onClick={() => removeFromCart(item.id)}
                className="remove-btn mt-4"
                title="remove"
              />
            </div>
          ))
        )}
        {cart.length > 1 && <button onClick={clearCart}>Clear All</button>}
        <div>
          <strong>Total: ${calculateTotalPrice().toFixed(2)}</strong>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartOffcanvas;
