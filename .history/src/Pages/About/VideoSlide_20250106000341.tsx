import React, { useState, useEffect } from "react";
import Video from "../../assets/images/herbs.mp4";

export const VideoSlide: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleText, setVisibleText] = useState<string | null>(null);

  const texts = [
    "First slide-up text",
    "Second slide-up text",
    "Third slide-up text",
    "Fourth slide-up text",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleText(texts[currentIndex]);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); // Loop through texts
    }, 5000); // Switch text every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex, texts]);

  return (
    <>
      <div className="video-slide-container col-md-12">
        <div className="video-background">
          <video
            className="video"
            autoPlay
            loop
            muted
            playsInline
            src={Video}
          ></video>
        </div>
        <div className="writeup-container">
          <div className="slide-up-container">
            <div className={`slide-up-text ${visibleText ? "visible" : ""}`}>
              {visibleText}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};