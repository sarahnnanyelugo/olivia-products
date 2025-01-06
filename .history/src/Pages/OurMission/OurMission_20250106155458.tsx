import React from "react";
import "./our-mission.scss";
import Img1 from "../../assets/images/many-prod.avif";

export const OurMission = () => {
  return (
    <div>
      <div className="mission-landing">
        <center>
          <h1>For the Love of the Planet</h1>
          <p>It's always been about more than cleaning</p>
        </center>
      </div>
      <center>
        <div className="mission-statement">
          <h1>Our Mission</h1>
          <p>Make it easy for everyone to make sustainable choices</p>
        </div>
      </center>
      <div className="change-div">
        <div className="change-div-inner col-md-7 offset-md-2 d-md-flex">
          <div className="col-md-7">
            <img src={Img1} width="100%" />
          </div>
          <div className="col-md-4 offset-md-1">
            <h1>Built for Change</h1>
            <p>
              We set out to create a business that acts as a force for good –
              showing that sustainable business practices and products can be
              the "norm," not the exception
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
