import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap"; // Assuming you're using Bootstrap's Offcanvas component

import "./main-product.scss";
export interface BadgeProps {
  firstImg: string;
  hoverImg: string;
  id: string;
  product: {
    firstImg: string;
    hoverImg: string;
  };
}

const MainProduct: React.FC<BadgeProps> = ({
  firstImg,
  hoverImg,
  product,
  id,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cart, setCart] = useState<any[]>([]); // Cart state
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const handleAddToCart = () => {
    setCart((prevCart) => {
      // Check if the product is already in the cart
      const isItemInCart = prevCart.some((item) => item.id === id);
      if (isItemInCart) {
        return prevCart; // If the item is already in the cart, return the current cart
      }
      return [...prevCart, { id, firstImg, hoverImg }]; // Otherwise, add the new item
    });
    setIsOffCanvasOpen(true); // Open offcanvas when item is added
  };
  const handleRemoveAllFromCart = () => {
    setCart([]); // Clear the entire cart
  };
  return (
    <>
      <div
        className="col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: "relative",
          display: "inline-block",
          width: "100%",
          maxWidth: "100%", // Ensure responsiveness
        }}
      >
        {/* Wrapper for images */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "100%", // Aspect ratio trick for square containers
            overflow: "hidden",
          }}
        >
          {/* First image */}
          <img
            className="product-img"
            src={firstImg}
            alt="Product"
            style={{
              opacity: isHovered ? 0 : 1, // Hide when hovered
            }}
          />

          {/* Hover image */}
          <img
            className="product-img"
            src={hoverImg}
            alt="Product Hover"
            style={{
              opacity: isHovered ? 1 : 0, // Show when hovered
            }}
          />
        </div>

        {/* 'Add to Cart' button */}
        {isHovered && (
          <button
            className="add-to-cart-btn"
            style={{
              opacity: isHovered ? 1 : 0, // Fade-in effect for the button
            }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        )}
      </div>{" "}
      <Offcanvas
        show={isOffCanvasOpen}
        onHide={() => setIsOffCanvasOpen(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            cart.map((item, index) => (
              <div key={item.id} className="cart-item">
                {" "}
                {/* Use item.id to key the list */}
                <img src={item.firstImg} alt={`Item ${index}`} width="100" />
                <p>Item {index + 1}</p>
              </div>
            ))
          )}
          {/* Button to remove all items from the cart */}
          <button
            className="remove-all-btn"
            onClick={handleRemoveAllFromCart}
            style={{
              marginTop: "10px",
              backgroundColor: "red",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Remove All
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MainProduct;
