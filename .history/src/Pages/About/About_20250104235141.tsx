import React from "react";
import "./about.scss";
export const About = () => {
  return (
    <div>
      <div className="banner">
        <center>
          <div className="col-md-5">
            {" "}
            <h5>About Us</h5>
            <p> Making a difference by doing things differently</p>
          </div>
        </center>
      </div>
      <center>
        <div className="col-md-5 problem-div">
          <h4>THE PROBLEM</h4>
          <p>
            Plastic was meant to last forever, but most of it is only used once.
          </p>
        </div>
      </center>
    </div>
  );
};
