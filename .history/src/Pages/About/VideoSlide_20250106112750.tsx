import React, { useState, useEffect } from "react";
import Video from "../../assets/images/herbs.mp4";

export const VideoSlide: React.FC = () => {
  return (
    <>
      <div className="scroll-wrapper">
        {/* Background video */}
        <video className="background-video" autoPlay muted loop>
          <source src="path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Scrollable content */}
        <div className="scroll-containa">
          <section className="snap-sectiona">Section 1</section>
          <section className="snap-sectiona">Section 2</section>
          <section className="snap-sectiona">Section 3</section>
          <section className="snap-sectiona">Section 4</section>
        </div>
      </div>
      {/* <div className="video-slide-container col-md-12">
        <div className="video-background col-md-12">
          <video
            className="video"
            autoPlay
            loop
            muted
            playsInline
            src={Video}
          ></video>
        </div>
        <div className="writeup-container col-md-12">
          <h1>TEXT 1</h1>
          <h1>TEXT2</h1>
          <h1>TEXT3</h1>
          <h1>TEXT4</h1>
        </div>
      </div> */}
    </>
  );
};
