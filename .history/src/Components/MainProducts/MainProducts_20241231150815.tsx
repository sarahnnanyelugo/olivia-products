import React, { useState } from "react";
import "./main-product.scss";

export interface ProductProps {
  id: number;
  firstImg: string;
  hoverImg: string;
  price: string;
  name: string;
  onAddToCart: (item: {
    id: number;
    firstImg: string;
    hoverImg: string;
    name: string;
    price: string;
  }) => void;
}

const MainProduct: React.FC<ProductProps> = ({
  id,
  firstImg,
  hoverImg,
  price,
  name,
  onAddToCart,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    onAddToCart({ id, firstImg, hoverImg, price, name }); // Add item to the cart
  };

  return (
    <>
      {" "}
      <div
        className="product-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image container with smooth transition */}
        <div className="image-wrapper">
          <img
            className={`product-image ${isHovered ? "hidden" : "visible"}`}
            src={firstImg}
            alt="Product"
          />
          <img
            className={`product-image ${isHovered ? "visible" : "hidden"}`}
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
      <div className="d-flex">
        <h6 style={{ flexGrow: 1 }}>{price}</h6>
        <h6>{name}</h6>
      </div>
    </>
  );
};

export default MainProduct;
