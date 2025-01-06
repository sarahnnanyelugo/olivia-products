import React, { useState, useEffect } from "react";
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
        <div className="writeup-container">
          <div className="slide-up-container">
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};
