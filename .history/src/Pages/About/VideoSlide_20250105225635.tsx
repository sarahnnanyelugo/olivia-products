import React, { useEffect, useState, useRef } from "react";
import Video from "../../assets/images/herbs.mp4";

export const VideoSlide: React.FC = () => {
  return (
    <div className="video-slide-container">
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
      <div className="">
        <h1>kfmekmfkemfkemfkmekfm</h1>
      </div>
    </div>
  );
};