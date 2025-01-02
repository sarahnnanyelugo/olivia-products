import React, { useState } from "react";
import "./main-product.scss";
export interface BadgeProps {
  firstImg: string;
  hoverImg: string;
  product: {
    firstImg: string;
    hoverImg: string;
  };
}

const MainProduct: React.FC<BadgeProps> = ({ firstImg, hoverImg, product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cart, setCart] = useState<any[]>([]); // Cart state
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const handleAddToCart = () => {
    setCart((prevCart) => [...prevCart, product]);
    setIsOffCanvasOpen(true); // Open offcanvas when item is added
  };
  return (
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
          onClick={() => alert("Added to cart!")}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default MainProduct;
