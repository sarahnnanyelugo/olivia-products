import React, { useState, useEffect } from "react";
import { testimonial } from "../../TestData/testimonialData";

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

  useEffect(() => {
    fetch("/path/to/testimonials.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);
    return () => clearInterval(interval); // Cleanup interval on component unmount
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

  return (
    <div className="testimonial-div">
      {" "}
      <div className="testimonial-carousel">
        {testimonial.length > 0 && (
          <div
            className="testimonial-slide"
            style={{
              backgroundColor: testimonials[currentIndex].backgroundColor,
            }}
          >
            <h3>{testimonials[currentIndex].name}</h3>
            <p>{testimonials[currentIndex].comment}</p>
            <div className="rating">
              {Array(testimonials[currentIndex].rating).fill("⭐").join("")}
            </div>
          </div>
        )}

        <button className="arrow left" onClick={prevSlide}>
          &#8592;
        </button>
        <button className="arrow right" onClick={nextSlide}>
          &#8594;
        </button>

        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
