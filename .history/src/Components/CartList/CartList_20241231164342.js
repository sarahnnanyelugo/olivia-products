// CartOffcanvas.tsx
import React from "react";
import { Offcanvas } from "react-bootstrap";

interface CartOffcanvasProps {
  show: boolean;
  onHide: () => void;
  cart: any[];
  incrementQuantity: (itemId: string) => void;
  decrementQuantity: (itemId: string) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  totalPrice: number;
}

const CartOffcanvas: React.FC<CartOffcanvasProps> = ({
  show,
  onHide,
  cart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
  totalPrice,
}) => {
  return (
    <Offcanvas show={show} onHide={onHide} placement="end">
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
                    onClick={() => incrementQuantity(item.id)}
                    style={{ marginRight: "5px" }}
                  >
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    style={{ marginLeft: "5px" }}
                  >
                    -
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
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

        {cart.length > 1 && (
          <button
            className="clear-all-btn"
            onClick={clearCart}
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

        <div style={{ marginTop: "20px" }}>
          <strong>Total: ${totalPrice.toFixed(2)}</strong>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartOffcanvas;
