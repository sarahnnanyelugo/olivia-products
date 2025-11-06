import React, { useRef, useState } from "react";
import "./our-mission.scss";
import Img1 from "../../assets/images/logo-anime.gif";

import { NavLink } from "react-router-dom";

export const OurMission = () => {
  return (
    <div className="home-div ">
      <div className="mission-landing">
        <h1 className="col-md-4 offset-md-2">Welcome to our Space</h1>
      </div>
      <center>
        <div className="mission-statement col-md-4">
          <img src={Img1} width="40%" />
          <p>
            Have a look at our commitment to the society in details as we are in
            process of developing healthier nation.
          </p>
        </div>
      </center>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3 galleries">
          <h1>Image Gallery</h1>
          <div className="col img-outer">
            <div className="img-div"></div>
            <p>MSNAI Primary School Rehabilitation in Lagos</p>
          </div>
          <div className="col img-outer">
            <div className="img-div"></div>
            <p>MSNAI Primary School Rehabilitation in Lagos</p>
          </div>
        </div>{" "}
        <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3 mt-5 galleries">
          <h1>Video Gallery</h1>
          <div className="col img-outer">
            <div className="img-div"></div>
            <p>MSNAI Primary School Rehabilitation in Lagos</p>
          </div>
          <div className="col img-outer">
            <div className="img-div"></div>
            <p>MSNAI Primary School Rehabilitation in Lagos</p>
          </div>{" "}
          <div className="col img-outer">
            <div className="img-div"></div>
            <p>MSNAI Primary School Rehabilitation in Lagos</p>
          </div>{" "}
          <div className="col img-outer">
            <div className="img-div"></div>
            <p>MSNAI Primary School Rehabilitation in Lagos</p>
          </div>
          <div className="col img-outer">
            <div className="img-div"></div>
            <p>MSNAI Primary School Rehabilitation in Lagos</p>
          </div>
        </div>
      </div>
    </div>
  );
};
