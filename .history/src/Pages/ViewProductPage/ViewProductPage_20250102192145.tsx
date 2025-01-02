// ProductDetail.tsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProductsData } from "../../TestData/allProductsData";
import "./view-product.scss";

export const ViewProductPage: React.FC = () => {
  const { id } = useParams(); // Get the product id from the URL
  const [product, setProduct] = useState<any>(null);
  const [activeImage, setActiveImage] = useState(0); // Track the current active image
  const [transitionDirection, setTransitionDirection] = useState<
    "left" | "right"
  >("right");

  useEffect(() => {
    const selectedProduct = allProductsData.find((p) => p.id === Number(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const images = [
    product.firstImg,
    product.hoverImg,
    ...(product.additionalImgs || []),
  ]; // Include additional images if available

  const handleNext = () => {
    setTransitionDirection("right");
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setTransitionDirection("left");
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="product-detail d-md-flex col-md-10 offset-md-1">
      {/* Image Carousel Section */}
      <div className="product-images col-md-6 d-md-flex">
        {/* Thumbnail Section */}
        <div className="image-thumbnails col-2">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${index === activeImage ? "active" : ""}`}
              onClick={() => {
                setTransitionDirection(index > activeImage ? "right" : "left");
                setActiveImage(index);
              }}
            />
          ))}
        </div>

        {/* Main Carousel Section */}
        <div className="main-carousel col-10">
          <div
            className={`image-container ${transitionDirection}`}
            style={{ transform: `translateX(-${activeImage * 100}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Image ${index + 1}`}
                className="main-image"
              />
            ))}
          </div>
          {/* Navigation Arrows */}
          <button className="prev-arrow" onClick={handlePrev}>
            &#10094;
          </button>
          <button className="next-arrow" onClick={handleNext}>
            &#10095;
          </button>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="product-info col-md-6">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">Price: ${product.price.toFixed(2)}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};
