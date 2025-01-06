import React, { useState, useEffect } from "react";
import Video from "../../assets/images/herbs.mp4";

export const VideoSlide: React.FC = () => {
  return (
    <>
      <div className="scroll-containa">
        <section className="snap-sectiona">
          <center>
            <h1>10,807,946</h1>
            <p>square feet of plastic packaging saved</p>
          </center>
        </section>
        <section className="snap-sectiona">
          {" "}
          <center>
            {" "}
            <h1>2,696,424</h1>
            <p>pounds of CO2 saved</p>
          </center>
        </section>
        <section className="snap-sectiona">
          {" "}
          <center>
            {" "}
            <h1>1,924,880,000</h1>
            <p>single-use plastic bottles diverted from landfills and oceans</p>
          </center>
        </section>
        <section className="snap-sectiona">
          {" "}
          <center>
            {" "}
            <h1>10,807,946</h1>
            <p>square feet of plastic packaging saved</p>
          </center>
        </section>
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
