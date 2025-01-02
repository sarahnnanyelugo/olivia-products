import React from "react";
import Video from "../../assets/web-video.mp4";

export const Home = () => {
  return <div style={{ height: "1800px", background: "blue" }}> <video
            className="viddeo "
            width="100%"
            autoplay="true"
            loop="true"
            muted="true"
            playsinline=""
            src={Video}
          ></video></div>;
};
