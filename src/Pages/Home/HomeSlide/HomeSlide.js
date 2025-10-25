import React, { useEffect, useState, useRef } from "react";
import "./home-slide.scss";
import MainPic from "../../../assets/images/slide-bg1.jpg";
import MainPic2 from "../../../assets/images/slide-bg2.jpg";
import MainPic3 from "../../../assets/images/slide-bg3.jpg";
import MainPic4 from "../../../assets/images/slide-bg4.jpg";
import MainPic5 from "../../../assets/images/slide-bg5.jpg";
import MainPic6 from "../../../assets/images/slide-bg6.png";
import MainPic7 from "../../../assets/images/slide-bg7.jpg";
import MainPic8 from "../../../assets/images/slide-bg8.jpg";
import Img from "../../../assets/images/fabric-no-bg.png";
import Img2 from "../../../assets/images/hand-no-bg.png";
import Img3 from "../../../assets/images/dish-no-bg.png";
import Img4 from "../../../assets/images/hair-no-bg.png";
import Img5 from "../../../assets/images/shampoo-no-bg.png";
import Img6 from "../../../assets/images/car-no-bg.png";
import Img7 from "../../../assets/images/air-no-bg.png";
import Img8 from "../../../assets/images/tile-no-bg.png";
import { IoArrowForward } from "react-icons/io5";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export const HomeSlide = () => {
  return (
    <>
      <div className="journey-carousel">
        {" "}
        <Carousel fade>
          <Carousel.Item>
            <div className="journey-div col-md-12">
              <img src={MainPic} width="100%" alt="" className="bg-img" />
              <div className="journey-cova ">
                <div className="d-md-flex">
                  <div className="col-md-4 offset-md-2 ">
                    <p>Bright, Clean, and Beautiful — Every Wash.</p>
                  </div>
                  <div className="col-md-5 offset-md- target-img">
                    <img src={Img} width="100%" alt="" />
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="journey-div col-md-12">
              <img src={MainPic2} width="100%" alt="" className="bg-img" />
              <div className="journey-cova ">
                <div className="d-md-flex">
                  {" "}
                  <div className="col-md-4 offset-md-2 ">
                    <p>Where Hygiene Meets Elegance</p>
                  </div>
                  <div className="col-md-5 offset-md- target-img">
                    <img src={Img2} width="100%" alt="" />
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="journey-div col-md-12">
              <img src={MainPic3} width="100%" alt="" className="bg-img" />
              <div className="journey-cova ">
                <div className="d-md-flex">
                  {" "}
                  <div className="col-md-4 offset-md-2 ">
                    <p>Every Breath, a Touch of Olivia</p>
                  </div>
                  <div className="col-md-5 offset-md- target-img">
                    <img src={Img7} width="100%" alt="" />
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="journey-div col-md-12">
              <img src={MainPic4} width="100%" alt="" className="bg-img" />
              <div className="journey-cova ">
                <div className="d-md-flex">
                  {" "}
                  <div className="col-md-4 offset-md-2 ">
                    <p>Power That Cuts Through Every Grease.</p>
                  </div>
                  <div className="col-md-5 offset-md- target-img">
                    <img src={Img3} width="100%" alt="" />
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="journey-div col-md-12">
              <img src={MainPic5} width="100%" alt="" className="bg-img" />
              <div className="journey-cova ">
                <div className="d-md-flex">
                  {" "}
                  <div className="col-md-4 offset-md-2 ">
                    <p>Revive Your Roots. Reveal Your Shine</p>
                  </div>
                  <div className="col-md-4 offset-md- target-img">
                    <img src={Img4} width="100%" alt="" />
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="journey-div col-md-12">
              <img src={MainPic8} width="100%" alt="" className="bg-img" />
              <div className="journey-cova ">
                <div className="d-md-flex">
                  {" "}
                  <div className="col-md-4 offset-md-2 ">
                    <p>Let Every Surface Sparkle Like New.</p>
                  </div>
                  <div className="col-md-5 offset-md- target-img">
                    <img src={Img8} width="100%" alt="" />
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="journey-div col-md-12">
              <img src={MainPic7} width="100%" alt="" className="bg-img" />
              <div className="journey-cova ">
                <div className="d-md-flex">
                  {" "}
                  <div className="col-md-4 offset-md-2 ">
                    <p>See the World in Your Shine.</p>
                  </div>
                  <div className="col-md-5 offset-md- target-img">
                    <img src={Img6} width="100%" alt="" />
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="journey-div col-md-12">
              <img src={MainPic6} width="100%" alt="" className="bg-img" />
              <div className="journey-cova ">
                <div className="d-md-flex">
                  {" "}
                  <div className="col-md-4 offset-md-2 ">
                    <p>Because Every Strand Deserves to Glow</p>
                  </div>
                  <div className="col-md-5 offset-md- target-img">
                    <img src={Img5} width="100%" alt="" />
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
          </Carousel.Item>{" "}
        </Carousel>
      </div>
    </>
  );
};
