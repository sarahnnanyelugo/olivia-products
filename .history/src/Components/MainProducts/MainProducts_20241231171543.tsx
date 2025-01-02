import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap"; // Assuming you're using Bootstrap's Offcanvas component
import { Link } from "react-router-dom";
import "./main-product.scss";

export interface ProductProps {
  id: number;
  firstImg: string;
  hoverImg: string;
  productPrice: number;
  productName: string;
  onAddToCart: (item: {
    id: number;
    firstImg: string;
    hoverImg: string;
    productPrice: number;
    productName: string;
  }) => void;
}

const MainProduct: React.FC<ProductProps> = ({
  id,
  firstImg,
  hoverImg,
  productPrice,
  productName,
  onAddToCart,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    onAddToCart({ id, firstImg, hoverImg, productPrice, productName });
  };

  return (
    <>
      <Link
        to={`/product/${id}`}
        className="product-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
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

        {isHovered && (
          <button onClick={handleAddToCart} className="cart-btn">
            Add to Cart
          </button>
        )}
      </Link>

      <div className="d-flex">
        <h6 style={{ flexGrow: 1 }}>${productPrice.toFixed(2)}</h6>
        <h6>{productName}</h6>
      </div>
    </>
  );
};

export default MainProduct;
