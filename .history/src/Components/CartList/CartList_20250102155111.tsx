import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useCart } from "../../CartContext";

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
      style={{ width: "20%" }}
    >
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
                alt={item.productName}
                style={{ width: "50px", marginRight: "1rem" }}
              />
              <div>
                <p>{item.productName}</p>
                <p>${(item.productPrice * item.quantity).toFixed(2)}</p>
                <div>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
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
