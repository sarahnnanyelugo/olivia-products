import React, { useEffect, useState, useRef } from "react";
import Video from "../../assets/images/herbs.mp4";
import SlideUpText from "./SlideUpText";

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
        <div className="writeup-container ">
          <SlideUpText
            texts={[
              "First slide-up text",
              "Second slide-up text",
              "Third slide-up text",
              "Fourth slide-up text",
            ]}
          />
        </div>
      </div>
    </>
  );
};
