import React, { useState } from "react";

export const ProductsSlide = ({ images }) => {
  // State to track the starting index of the currently displayed images
  const [startIndex, setStartIndex] = useState(0);

  // Extract a subset of 5 images to display based on the current startIndex
  const displayedImages = images.slice(startIndex, startIndex + 5);

  // Function to handle the "next" button click
  const handleNext = () => {
    // Increment the startIndex, looping back to 0 if it exceeds the image array length
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle the "previous" button click
  const handlePrev = () => {
    // Decrement the startIndex, ensuring it wraps around to the last index if it goes negative
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
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
