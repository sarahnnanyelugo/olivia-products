import React, { useState } from "react";
import "./Carousel.css"; // Add custom styles here

const ProductsSlide = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);

  const displayedImages = images.slice(startIndex, startIndex + 5);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <button className="prev-button" onClick={handlePrev}>
        &#8249;
      </button>
      <div className="carousel-images">
        {displayedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${startIndex + index + 1}`}
            className="carousel-image"
          />
        ))}
      </div>
      <button className="next-button" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default ProductsSlide;
