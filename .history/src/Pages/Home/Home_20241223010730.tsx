import React from "react";
import Video from "../../assets/home-video.webm";

export const Home = () => {
  return (
    <div>
      {" "}
      <video
        className="viddeo "
        width="100%"
        autoplay="true"
        playsinline=""
        src={Video}
      ></video>
    </div>
  );
};
