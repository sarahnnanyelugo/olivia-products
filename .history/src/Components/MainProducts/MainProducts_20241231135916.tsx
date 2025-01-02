import React, { useState } from "react";

export interface ProductProps {
  id: number;
  firstImg: string;
  hoverImg: string;
  onAddToCart: (item: {
    id: number;
    firstImg: string;
    hoverImg: string;
  }) => void;
}

const MainProduct: React.FC<ProductProps> = ({
  id,
  firstImg,
  hoverImg,
  onAddToCart,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    onAddToCart({ id, firstImg, hoverImg }); // Add item to the cart
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        display: "inline-block",
        width: "200px",
        margin: "1rem",
      }}
    >
      <img
        src={isHovered ? hoverImg : firstImg}
        alt="Product"
        style={{ width: "100%" }}
      />
      {isHovered && (
        <button
          onClick={handleAddToCart}
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "0.5rem 1rem",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default MainProduct;
