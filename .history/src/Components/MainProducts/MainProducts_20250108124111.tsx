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
  rating: string;
  onAddToCart: (item: {
    id: number;
    firstImg: string;
    hoverImg: string;
    productPrice: number;
    productName: string;
    rating: string;
  }) => void;
}

const MainProduct: React.FC<ProductProps> = ({
  id,
  firstImg,
  hoverImg,
  productPrice,
  productName,
  rating,
  onAddToCart,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    onAddToCart({ id, firstImg, hoverImg, productPrice, productName, rating });
  };

  return (
    <>
      <div
        className="product-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="image-wrapper">
          {" "}
          <img
            className={`product-image ${isHovered ? "hidden" : "visible"}`}
            src={firstImg}
            alt="Product"
            width="100%"
          />
          <Link to={`/product/${id}`}>
            <img
              className={`product-image ${isHovered ? "visible" : "hidden"}`}
              src={hoverImg}
              alt="Product Hover"
              width="100%"
            />
          </Link>
        </div>

        {isHovered && (
          <button onClick={handleAddToCart} className="cart-btn">
            Add to Cart
          </button>
        )}
      </div>

      <div
        className="d-flex prd-details"
        style={{ textAlign: "left", padding: "5px" }}
      >
        {" "}
        <h6 style={{ flexGrow: 1 }}>{productName}</h6>
        <h6>${productPrice.toFixed(2)}</h6>
        <h6>{productNam}</h6>
      </div>
    </>
  );
};

export default MainProduct;
