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
                <h6>Eco-friendly</h6>
                <p>Compostable paper-based packaging</p>
              </div>{" "}
              <div className="col-md-3">
                <h6>Clean Ingredients</h6>
                <p>Safe for use around kids and pets</p>
              </div>{" "}
              <div className="col-md-3">
                <h6>Money-Saving</h6>
                <p>Never pay for water or plastic packaging</p>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};
