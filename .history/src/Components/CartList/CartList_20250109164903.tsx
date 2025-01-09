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
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <h3>Your Cart</h3>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cart.length === 0 ? (
          <h5>Your cart is empty!</h5>
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

                <div style={{}} className="mt-4 increments">
                  <span onClick={() => incrementQuantity(item.id)}>+</span>
                  <span>{item.quantity}</span>
                  <span onClick={() => decrementQuantity(item.id)}>-</span>
                </div>
              </div>

              <div>
                {" "}
                <MdDelete
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn mt-4"
                  title="remove"
                />
                <p>${(item.productPrice * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))
        )}

        <div>
          <h5>Total: ${calculateTotalPrice().toFixed(2)}</h5>
        </div>
        {cart.length > 1 && (
          <button onClick={clearCart} className="clear-all">
            Clear All
          </button>
        )}
        {cart.length > 0 && <button className="checkout-btn">Checkout</button>}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartOffcanvas;
