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
      }}
    >
      <img
        src={isHovered ? hoverImg : firstImg}
        alt="Product"
        style={{ width: "100%" }}
      />
      {isHovered && (
        <button onClick={handleAddToCart} className="cart-btn">
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default MainProduct;
