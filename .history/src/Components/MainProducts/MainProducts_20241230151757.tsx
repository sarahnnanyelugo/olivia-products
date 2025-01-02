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
      }}
    >
      {/* First image */}
      <img
        src={firstImg}
        alt="Product"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.5s ease-in-out",
          opacity: isHovered ? 0 : 1, // Hide when hovered
        }}
      />

      {/* Hover image */}
      <img
        src={hoverImg}
        alt="Product Hover"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.5s ease-in-out",
          opacity: isHovered ? 1 : 0, // Show when hovered
        }}
      />

      {/* 'Add to Cart' button */}
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
