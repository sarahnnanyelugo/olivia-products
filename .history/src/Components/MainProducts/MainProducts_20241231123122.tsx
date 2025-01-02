import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap"; // Assuming you're using Bootstrap's Offcanvas component
import "./main-product.scss";

// Define types for props
export interface ProductProps {
  id: number; // Unique ID for each product
  firstImg: string;
  hoverImg: string;
}

const MainProduct: React.FC<ProductProps> = ({ id, firstImg, hoverImg }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cart, setCart] = useState<ProductProps[]>([]); // Cart state
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  // Add item to cart if it's not already there
  const handleAddToCart = () => {
    // Check if the item is already in the cart
    const isItemInCart = cart.some((item) => item.id === id);

    if (!isItemInCart) {
      // If the item is not in the cart, add it to the list
      setCart((prevCart) => [...prevCart, { id, firstImg, hoverImg }]);
    }
    setIsOffCanvasOpen(true); // Open offcanvas when item is added
  };

  // Remove all items from the cart
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
      </div>

      {/* Offcanvas to show cart */}
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
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                {" "}
                {/* Use item.id to key the list */}
                <img src={item.firstImg} alt={`Item ${item.id}`} width="100" />
                <p>Item {item.id}</p>
                <button onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
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
