import React, { useState, useEffect } from "react";
import Video from "../../assets/images/herbs.mp4";

export const VideoSlide: React.FC = () => {
  return (
    <>
      <div className="scroll-container">
        <section className="snap-section">Section 1</section>
        <section className="snap-section">Section 2</section>
        <section className="snap-section">Section 3</section>
        <section className="snap-section">Section 4</section>
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
