import React, { useState } from "react";
import "./products-slide.scss";
type CarouselProps = {
  images: string[]; // Array of image URLs
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container">
      <button onClick={prevImage} className="carousel-arrow prev-arrow">
        &lt;
      </button>

      <div className="carousel-images">
        {images.slice(currentIndex, currentIndex + 5).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`carousel-img-${index}`}
            className="carousel-image"
          />
        ))}
      </div>

      <button onClick={nextImage} className="carousel-arrow next-arrow">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
