import React, { useState, useEffect } from "react";
import "./our-mission.scss";
import Img1 from "../../assets/images/many-prod.avif";
import Img2 from "../../assets/images/butterfly.avif";
import Img3 from "../../assets/images/foam.avif";
import Img4 from "../../assets/images/people.avif";
import Img5 from "../../assets/images/policy.avif";
import { NavLink } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

export const OurMission = () => {
  const [activeSection, setActiveSection] = useState("people");
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const top = section.offsetTop - 100; // Offset for better accuracy
        const height = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= top && scrollY < top + height) {
          setActiveSection(sectionId || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
            <a
              href="#planet"
              className={activeSection === "planet" ? "active" : ""}
            >
              Planet
            </a>
          </li>{" "}
          <li className="list-inline-item">
            <a
              href="#product"
              className={activeSection === "product" ? "active" : ""}
            >
              Product
            </a>
          </li>{" "}
          <li className="list-inline-item">
            <a
              href="#people"
              className={activeSection === "people" ? "active" : ""}
            >
              People
            </a>
          </li>{" "}
          <li className="list-inline-item">
            <a
              href="#policy"
              className={activeSection === "policy" ? "active" : ""}
            >
              Policy
            </a>
          </li>
        </ul>
      </div>

      <div id="planet" className="section col-md-6 offset-md-3 d-md-flex">
        <div className="col-md-6">
          <img src={Img2} width="100%" />
        </div>
        <div className="col-md-6">
          <img src={Img2} width="100%" />
        </div>
      </div>
      <div id="product" className="section"></div>
      <div id="people" className="section"></div>
      <div id="policy" className="section"></div>
    </div>
  );
};
