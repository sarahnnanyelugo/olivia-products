import React, { useEffect, useState, useRef } from "react";
import "./VideoSlide.scss";
import Video from "../../assets/images/herbs.mp4";

export const VideoSlide: React.FC = () => {
  const writeups: string[] = [
    "Making a difference by doing things differently.",
    "Clean ingredients, effective formulas.",
    "Eco-friendly solutions for a cleaner world.",
    "All power, no plastic.",
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleIndex, setVisibleIndex] = useState<number>(0);

  const handleScroll = (): void => {
    if (containerRef.current) {
      const { top } = containerRef.current.getBoundingClientRect();
      const scrollPosition = window.innerHeight - top;

      // Calculate which writeup should be visible based on scroll position
      const newIndex = Math.floor(scrollPosition / window.innerHeight);
      if (
        newIndex !== visibleIndex &&
        newIndex >= 0 &&
        newIndex < writeups.length
      ) {
        setVisibleIndex(newIndex);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleIndex]);

  return (
    <div className="video-slide-container" ref={containerRef}>
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
        {writeups.map((text, index) => (
          <h1
            key={index}
            className={`writeup ${index === visibleIndex ? "visible" : ""}`}
          >
            {text}
          </h1>
        ))}
      </div>
    </div>
  );
};
