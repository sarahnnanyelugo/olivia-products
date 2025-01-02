import React, { useState } from "react";
import "./products-slide.scss"; // Import the CSS file for styling the carousel

export const ProductsSlide = ({ images }) => {
  // State to track the starting index of the currently displayed images
  const [startIndex, setStartIndex] = useState(0);

  const totalImages = images.length;
  const displayedImages = images.slice(startIndex, startIndex + 5);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div className="carousel-container">
      <button className="prev-button" onClick={handlePrev}>
        &#8249;
      </button>

      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${startIndex * 20}%)`, // 20% ensures sliding for 5 visible items
            transition: "transform 0.5s ease-in-out", // Smooth slide animation
          }}
        >
          {images.map((image, index) => (
            <div className="carousel-item" key={index}>
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="carousel-image"
              />
              <h3 className="carousel-title">Product {index + 1}</h3>
              <p className="carousel-description">
                Sample description for Product {index + 1}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button className="next-button" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};
