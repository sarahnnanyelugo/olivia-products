import React from "react";
import { Offcanvas } from "react-bootstrap";

const CartOffcanvas = ({
  show,
  onClose,
  cart,
  onRemoveFromCart,
  onClearCart,
  onIncrementQuantity,
  onDecrementQuantity,
}) => {
  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.productPrice * item.quantity,
      0
    );
  };

  return (
    <Offcanvas show={show} onHide={onClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
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
                <div>
                  <button
                    onClick={() => onIncrementQuantity(item.id)}
                    style={{ marginRight: "5px" }}
                  >
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => onDecrementQuantity(item.id)}
                    style={{ marginLeft: "5px" }}
                  >
                    -
                  </button>
                </div>
              </div>

              <button
                onClick={() => onRemoveFromCart(item.id)}
                style={{
                  marginLeft: "1rem",
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                Remove
              </button>
            </div>
          ))
        )}

        {/* Button to remove all items from the cart, shown only if more than one item in the cart */}
        {cart.length > 1 && (
          <button
            className="clear-all-btn"
            onClick={onClearCart}
            style={{
              marginTop: "10px",
              backgroundColor: "#f44336",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              width: "100%",
            }}
          >
            Clear All
          </button>
        )}
        {/* Display total price */}
        <div style={{ marginTop: "20px" }}>
          <strong>Total: ${calculateTotalPrice().toFixed(2)}</strong>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartOffcanvas;
