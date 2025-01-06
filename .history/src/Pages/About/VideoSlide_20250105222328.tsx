import React, { useState, useEffect } from "react";
import Video from "../../assets/images/herbs.mp4";

export const VideoSlide: React.FC = () => {
  const writeups: string[] = [
    "Making a difference by doing things differently.",
    "Clean ingredients, effective formulas.",
    "Eco-friendly solutions for a cleaner world.",
    "All power, no plastic.",
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % writeups.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [writeups.length]);

  return (
    <div className="herbs-vid mt-5">
      <div className="vid">
        <video
          className="video"
          width="100%"
          autoPlay
          loop
          muted
          playsInline
          src={Video}
        ></video>
      </div>

      <div className="heading-slide">
        {writeups.map((text, index) => (
          <h1
            key={index}
            className={`slide-text ${
              index === currentIndex ? "visible" : "hidden"
            }`}
          >
            {text}
          </h1>
        ))}
      </div>
    </div>
  );
};
