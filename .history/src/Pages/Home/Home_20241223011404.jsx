import React from "react";
import Video from "../../assets/images/home-video.webm";

export const Home = () => {
  return (
    <div>
      {" "}
      <video
        className="viddeo "
        width="100%"
        autoplay="true"
        loop="true"
        // muted="false"
        playsinline="true"
        src={Video}
      ></video>
    </div>
  );
};
