import React from "react";
import Video from "../../assets/images/herbs.mp4";

export const VideoSlide: React.FC = () => {
  return (
    <div className="herbs-vid mt-5">
      <div className="vid ">
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
        ></video>{" "}
      </div>
      <div className="heading-slide">
        <center>
          {" "}
          <h1>1200030002</h1>
        </center>
      </div>
    </div>
  );
};
