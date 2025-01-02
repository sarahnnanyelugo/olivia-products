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
      style={{ position: "relative", display: "inline-block" }}
    >
      {/* Display the appropriate image based on hover state */}
      <img src={isHovered ? hoverImg : hoverImg} alt="Product" />

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
