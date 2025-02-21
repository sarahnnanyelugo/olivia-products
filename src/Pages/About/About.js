import React, { useRef, useState } from "react";

import Product1 from "../../assets/images/product1.avif";
import Product2 from "../../assets/images/product2.avif";
import Product3 from "../../assets/images/product3.avif";
import Product4 from "../../assets/images/product4.avif";
import Product5 from "../../assets/images/product5.avif";
import Product6 from "../../assets/images/product6.avif";
import Product7 from "../../assets/images/product7.avif";

import Abt1 from "../../assets/images/abt1.avif";
import Abt2 from "../../assets/images/abt2.avif";
import Abt3 from "../../assets/images/abt3.avif";
import "./about.scss";
import { Link } from "react-router-dom";
import FactTab from "../../Components/FactTab/FactTab";
import { VideoSlide } from "./VideoSlide";

const tabs = [
  {
    label: "Tab 1",
    content: {
      image: Abt1,
      heading: "DID YOU KNOW?",
      heading2: "OUR SOLUTION",
      description: "Only 5% of plastic actually gets recycled.",
      description2:
        "We made sure our bottles would be the last ones you'd ever need - made to be reused and refilled forever with plastic-free tablets.",
    },
  },
  {
    label: "Tab 2",
    content: {
      image: Abt2,
      heading: "DID YOU KNOW?",
      heading2: "OUR SOLUTION",
      description: "Only 5% of plastic actually gets recycled.",
      description2:
        "We made sure our bottles would be the last ones you'd ever need - made to be reused and refilled forever with plastic-free tablets.",
    },
  },
  {
    label: "Tab 3",
    content: {
      image: Abt3,
      heading: "DID YOU KNOW?",
      heading2: "OUR SOLUTION",
      description: "Only 5% of plastic actually gets recycled.",
      description2:
        "We made sure our bottles would be the last ones you'd ever need - made to be reused and refilled forever with plastic-free tablets.",
    },
  },
];

const items = [
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
  Product7,
];

export const About = () => {
  const images = [Abt3, Abt2, Abt1];
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [visibleParagraphs, setVisibleParagraphs] = useState([]);
  const containerRef = useRef[null];
  const paragraphsRef = useRef([]);

  return (
    <div className="home-div">
      {/* Video Section */}
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
        <div className="col-md-6 problem-div">
          <h4>THE PROBLEM</h4>
          <p>
            Plastic was meant to last forever, but most of it is only used once.
          </p>
        </div>
      </center>
      <div className="scroll-container" ref={containerRef}>
        <div className="content">
          <div className="sticky-image col-md-6">
            <img
              src={currentImage}
              alt="Scroll Transition"
              className="col-md-11"
            />
          </div>
          <div className="writeup col-md-3">
            {[
              "The average person eats credit card’s worth of plastic each week - amounting to 74,000 microplastics each year.",
              "Every year nearly 18 billion pounds of plastic enters the ocean - that's one garbage truck full every minute.",
              "We generate enough plastic waste each year to circle the earth four times. And we can't recycle our way out of this plastic problem. Only 5% of plastic waste actually gets recycled!",
            ].map((text, index) => (
              <p
                key={index}
                ref={(el) => (paragraphsRef.current[index] = el)}
                className={visibleParagraphs[index] ? "visible" : "hidden"}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="paper-div d-md-flex">
        <div className="col-md-3 offset-md-1 pd-1">
          <h6>THE SOLUTION</h6>
          <h2>All Power, No Plastic</h2>
          <p>
            Keep our homes and planet clean with products that eliminate
            single-use plastic and can be refilled again (and again). Blueland:
            Eco-Friendly Cleaning Products
          </p>
        </div>
        <div className="col-md-8 refil "> </div>
      </div>{" "}
      <div
        style={{
          width: "100%",
          background: "#EFF5FF",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <center>
          <h1>We Reimagined Everything</h1>
        </center>
        <FactTab tabs={tabs} />
      </div>
      <div>
        <center>
          <div className="col-md-8 impact-div">
            <h6>THE IMPACT</h6>
            <h1>
              Over 1 billion single-use plastic bottles diverted from landfills
              and oceans since 2019
            </h1>
          </div>
        </center>
        <VideoSlide />
      </div>
    </div>
  );
};
