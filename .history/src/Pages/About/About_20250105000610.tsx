import React, { useState, useEffect } from "react";
import "./about.scss";
import Abt1 from "../../assets/images/abt1.avif";
import Abt2 from "../../assets/images/abt2.avif";
import Abt3 from "../../assets/images/abt3.avif";

export const About: React.FC = () => {
  const images: string[] = [Abt1, Abt2, Abt3];
  const [currentImage, setCurrentImage] = useState<string>(images[0]);
  const [scrollIndex, setScrollIndex] = useState<number>(0);
  const handleScroll = (): void => {
    const newIndex = Math.floor(window.scrollY / 200) % images.length;
    if (newIndex !== scrollIndex) {
      setScrollIndex(newIndex);
      setCurrentImage(images[newIndex]);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollIndex, images.length]);
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
        <div className="col-md-6 problem-div">
          <h4>THE PROBLEM</h4>
          <p>
            Plastic was meant to last forever, but most of it is only used once.
          </p>
        </div>
      </center>
      <div className="scroll-container">
        <div className="content">
          <div className="sticky-image col-md-6">
            <img src={currentImage} alt="Scroll Transition" />
          </div>
          <div className="writeup col-md-6">
            {/* Long text content */}
            <p style={{ marginBottom: "100px" }}>
              The average person eats credit card’s worth of plastic each week -
              amounting to 74,000 microplastics each year.
            </p>{" "}
            <p style={{ marginBottom: "100px" }}>
              The average person eats credit card’s worth of plastic each week -
              amounting to 74,000 microplastics each year.
            </p>{" "}
            <p style={{ marginBottom: "100px" }}>
              The average person eats credit card’s worth of plastic each week -
              amounting to 74,000 microplastics each year.
            </p>{" "}
            <p style={{ marginBottom: "100px" }}>
              The average person eats credit card’s worth of plastic each week -
              amounting to 74,000 microplastics each year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};