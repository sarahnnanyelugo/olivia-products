import React, { useState } from "react";

export interface BadgeProps {
  firstImg: string;
  hoverImg: string;
}

const MainProduct: React.FC<BadgeProps> = ({ firstImg, hoverImg }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="recommended-badge"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        display: "inline-block",
        overflow: "hidden",
      }}
    >
      {/* Image container with transition */}
      <img
        src={isHovered ? hoverImg : firstImg}
        alt="Product"
        style={{
          width: "100%",
          height: "auto",
          transition: "opacity 0.5s ease-in-out",
          opacity: isHovered ? 1 : 0.5, // Change opacity to give a fade effect
        }}
      />

      {/* Conditionally render the 'Add to Cart' button */}
      {isHovered && (
        <button
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "10px 20px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
            transition: "opacity 0.3s ease-in-out",
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
