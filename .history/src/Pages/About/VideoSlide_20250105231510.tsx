import React, { useEffect, useState, useRef } from "react";
import Video from "../../assets/images/herbs.mp4";

export const VideoSlide: React.FC = () => {
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
