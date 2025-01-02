import React, { useState } from "react";
import "./products-slide.scss";
export const ProductsSlide = ({ images, num }) => {
  const [startIndex, setStartIndex] = useState(0); // Tracks the current index
  const totalImages = images.length;

  const handleNext = () => {
    // Moves to the next slide, looping to the start if at the end
    setStartIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handlePrev = () => {
    // Moves to the previous slide, looping to the end if at the start
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
            transform: `translateX(-${startIndex * 20}%)`, // Shifts by 20% per index
            transition: "transform 0.5s ease-in-out", // Smooth sliding transition
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
