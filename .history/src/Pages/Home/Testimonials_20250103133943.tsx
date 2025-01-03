import React, { useState, useEffect } from "react";

interface Testimonial {
  name: string;
  comment: string;
  rating: number;
  backgroundColor: string;
}

const TestimonialCarousel: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayInterval = 5000; // Auto-play interval (in milliseconds)
  let touchStartX: number | null = null; // Track touch start position for swipe

  useEffect(() => {
    fetch("/testimonialData.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [currentIndex, testimonials]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      nextSlide(); // Swipe left
    } else if (touchEndX - touchStartX > 50) {
      prevSlide(); // Swipe right
    }
    touchStartX = null;
  };

  if (testimonials.length === 0) {
    return <div>Loading testimonials...</div>; // Display a loading message or spinner
  }

  return (
    <div className="testimonial-div">
      <div
        className="testimonial-carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="testimonial-wrapper"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
            width: `${testimonials.length * 100}%`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-slide ${
                index === currentIndex ? "active" : ""
              }`}
              style={{
                backgroundColor: testimonial.backgroundColor,
                width: "30%", // Each slide takes 30% of the carousel width
                margin: "0 2%", // Add spacing between slides
              }}
            >
              <h3>{testimonial.name}</h3>
              <p>{testimonial.comment}</p>
              <div className="rating">
                {Array(testimonial.rating).fill("⭐").join("")}
              </div>
            </div>
          ))}
        </div>

        <button className="arrow left" onClick={prevSlide}>
          &#8592;
        </button>
        <button className="arrow right" onClick={nextSlide}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
