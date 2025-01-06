import React from "react";
import Video from "../../assets/images/home-video.mp4";

export const VideoSlide: React.FC = () => {
  return (
    <div>
      <div className="video-div2">
        {" "}
        <video
          className="video"
          width="100%"
          autoPlay
          loop
          muted
          playsInline
          controls
          src={Video}
        ></video>
        <div className="heading-slide">
          <h1>1200030002</h1>
        </div>
      </div>
    </div>
  );
};
