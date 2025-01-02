import React, { useState } from "react";
import "./products-slide.scss";
export const ProductsSlide = ({ images }) => {
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
    <div className="carousel">
      {/* Button to navigate to the previous set of images */}
      <button className="prev-button" onClick={handlePrev}>
        &#8249; {/* Left arrow icon */}
      </button>

      {/* Container for displaying the current set of 5 images */}
      <div className="carousel-images">
        {displayedImages.map((image, index) => (
          <img
            key={index} // Unique key for each image
            src={image} // URL of the image
            alt={`Product ${startIndex + index + 1}`} // Accessible alt text
            className="carousel-image" // CSS class for styling individual images
          />
        ))}
      </div>

      {/* Button to navigate to the next set of images */}
      <button className="next-button" onClick={handleNext}>
        &#8250; {/* Right arrow icon */}
      </button>
    </div>
  );
};
