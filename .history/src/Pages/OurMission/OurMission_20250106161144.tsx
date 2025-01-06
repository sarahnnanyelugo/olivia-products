import React from "react";
import "./our-mission.scss";
import Img1 from "../../assets/images/many-prod.avif";
import { NavLink } from "react-router-dom";

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
          <div className="col-md-4 offset-md-1 mission-statement2">
            <h1>Built for Change</h1>
            <p>
              We set out to create a business that acts as a force for good –
              showing that sustainable business practices and products can be
              the "norm," not the exception
            </p>
          </div>
        </div>
      </div>
      <div className="mission-navlinks">
        <ul className="list-inline list-unstyled col-md-6 offset-md-3">
          <li className="list-inline-item">
            <NavLink to={"#planet"}>Planet</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"#product"}>Product</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"#people"}>People</NavLink>
          </li>{" "}
          <li className="list-inline-item">
            <NavLink to={"#policy"}>Policy</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
