import React from "react";
import Video from "../../assets/images/home-video.webm";

export const Home = () => {
  return (
    <div className="home-div">
      {" "}
      <video
        className="viddeo "
        width="100%"
        autoplay="true"
        loop="true"
        muted="false"
        playsinline="true"
        src={Video}
      ></video>
      <div className="stats">
        <center>
          <div className="col-md-8">
            <h1>1,000,000+ Homes Have Made the Switch</h1>
            <div className="d-md-flex">
              <div className="col-md-3">
                <h6>Powerfully Effective</h6>
                <p>90,000+ 5-star reviews</p>
              </div>{" "}
              <div className="col-md-3">
                <h6>Powerfully Effective</h6>
                <p>90,000+ 5-star reviews</p>
              </div>{" "}
              <div className="col-md-3">
                <h6>Powerfully Effective</h6>
                <p>90,000+ 5-star reviews</p>
              </div>{" "}
              <div className="col-md-3">
                <h6>Powerfully Effective</h6>
                <p>90,000+ 5-star reviews</p>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};
