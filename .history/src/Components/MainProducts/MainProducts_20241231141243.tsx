import React, { useState } from "react";
import "./main-product.scss";

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
      className="product-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with smooth transition */}
      <div className="image-wrapper">
        <img
          className={`product-image ${isHovered ? "hidden" : ""}`}
          src={firstImg}
          alt="Product"
        />
        <img
          className={`product-image ${isHovered ? "visible" : ""}`}
          src={hoverImg}
          alt="Product Hover"
        />
      </div>

      {/* 'Add to Cart' button */}
      {isHovered && (
        <button onClick={handleAddToCart} className="cart-btn">
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default MainProduct;
