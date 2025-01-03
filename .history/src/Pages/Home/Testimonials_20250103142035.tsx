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
  const [isTransitioning, setIsTransitioning] = useState(false); // For transition control
  const autoPlayInterval = 5000; // Auto-play interval (in milliseconds)
  const visibleItems = 3; // Number of items to show at a time

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
      return () => clearInterval(interval);
    }
  }, [currentIndex, testimonials]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      );
    }
  };

  const getVisibleTestimonials = () => {
    const total = testimonials.length;
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;
    return [
      testimonials[prevIndex],
      testimonials[currentIndex],
      testimonials[nextIndex],
    ];
  };

  // Transition Control
  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // Allow the transition to finish
      }, 1000); // Duration should match CSS transition time
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  if (testimonials.length === 0) {
    return <div>Loading testimonials...</div>;
  }

  return (
    <div className="testimonial-div">
      <div className="testimonial-carousel">
        <div className="testimonial-wrapper">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-slide ${index === 1 ? "active" : ""}`}
              style={{
                backgroundColor: testimonial.backgroundColor,
                width: index === 1 ? "70%" : "15%", // Middle one takes 70%, others take 15%
                opacity: index === 1 ? 1 : 0.4,
                transform: index === 1 ? "scale(1.1)" : "scale(0.9)", // Middle one is bigger
                zIndex: index === 1 ? 2 : 1, // Middle one is on top
              }}
            >
              <h3 style={{ fontSize: index === 1 ? "24px" : "14px" }}>
                {testimonial.name}
              </h3>
              <p style={{ fontSize: index === 1 ? "18px" : "11px" }}>
                {testimonial.comment}
              </p>
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
