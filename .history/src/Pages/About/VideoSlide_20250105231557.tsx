import React, { useEffect, useState, useRef } from "react";
import Video from "../../assets/images/herbs.mp4";
type SlideUpTextProps = {
  texts: string[];
};
export const VideoSlide: React.FC = () => {const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerTop = container.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      texts.forEach((_, index) => {
        const element = document.getElementById(`slide-${index}`);
        if (element) {
          const elementTop = element.getBoundingClientRect().top;

          // Trigger animation when the element is in view
          if (elementTop < windowHeight && elementTop > containerTop) {
            setVisibleIndices((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
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
        <div
          className="writeup-container slide-up-container"
          ref={containerRef}
        >
          {texts.map((text, index) => (
            <div
              key={index}
              id={`slide-${index}`}
              className={`slide-up-text ${
                visibleIndices.includes(index) ? "visible" : ""
              }`}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
