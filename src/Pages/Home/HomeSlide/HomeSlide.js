import React, { useEffect, useState, useRef } from "react";
import "./home-slide.scss";
import MainPic from "../../../assets/images/slide-bg1.jpg";
import MainPic2 from "../../../assets/images/slide-bg2.jpg";
import MainPic3 from "../../../assets/images/slide-bg3.jpg";
import MainPic4 from "../../../assets/images/slide-bg4.jpg";
import MainPic5 from "../../../assets/images/slide-bg5.jpg";
import MainPic6 from "../../../assets/images/slide-bg6.jpg";
import MainPic7 from "../../../assets/images/slide-bg7.jpg";
import MainPic8 from "../../../assets/images/slide-bg8.jpg";
import Img from "../../../assets/images/prd7.png";
import Img2 from "../../../assets/images/prd5.png";
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
              <img src={MainPic} width="100%" alt="" />
              <div className="journey-cova ">
                <div className="d-md-flex">
                  <div className="col-md-4 offset-md-2 ">
                    <p>Keep your clothes stain free</p>
                  </div>
                  <div className="col-md-4 offset-md-1 target-img">
                    <img src={Img} width="100%" alt="" />
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="journey-div col-md-12">
              <img src={MainPic2} width="100%" alt="" />
              <div className="journey-cova ">
                <div className="d-md-flex">
                  {" "}
                  <div className="col-md-4 offset-md-2 ">
                    <p>Illuminate your smile</p>
                  </div>
                  <div className="col-md-4 offset-md-1 target-img">
                    <img src={Img} width="100%" alt="" />
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="journey-div col-md-12">
              <img src={MainPic3} width="100%" alt="" />
              <div className="journey-cova ">
                <div className="d-md-flex">
                  {" "}
                  <div className="col-md-4 offset-md-2 ">
                    <p>Your Powerful Shield against Germs</p>
                  </div>
                  <div className="col-md-4 offset-md-1 target-img">
                    <img src={Img} width="100%" alt="" />
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="journey-div col-md-12">
              <img src={MainPic4} width="100%" alt="" />
              <div className="journey-cova ">
                <div className="d-md-flex">
                  {" "}
                  <div className="col-md-4 offset-md-2 ">
                    <p>Your Powerful Shield against Germs</p>
                  </div>
                  <div className="col-md-4 offset-md-1 target-img">
                    <img src={Img} width="100%" alt="" />
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="journey-div col-md-12">
              <img src={MainPic5} width="100%" alt="" />
              <div className="journey-cova ">
                <div className="d-md-flex">
                  {" "}
                  <div className="col-md-4 offset-md-2 ">
                    <p>Your Powerful Shield against Germs</p>
                  </div>
                  <div className="col-md-4 offset-md-1 target-img">
                    <img src={Img} width="100%" alt="" />
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="journey-div col-md-12">
              <img src={MainPic6} width="100%" alt="" />
              <div className="journey-cova ">
                <div className="d-md-flex">
                  {" "}
                  <div className="col-md-4 offset-md-2 ">
                    <p>Your Powerful Shield against Germs</p>
                  </div>
                  <div className="col-md-4 offset-md-1 target-img">
                    <img src={Img} width="100%" alt="" />
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="journey-div col-md-12">
              <img src={MainPic7} width="100%" alt="" />
              <div className="journey-cova ">
                <div className="d-md-flex">
                  {" "}
                  <div className="col-md-4 offset-md-2 ">
                    <p>Your Powerful Shield against Germs</p>
                  </div>
                  <div className="col-md-4 offset-md-1 target-img">
                    <img src={Img} width="100%" alt="" />
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="journey-div col-md-12">
              <img src={MainPic8} width="100%" alt="" />
              <div className="journey-cova ">
                <div className="d-md-flex">
                  {" "}
                  <div className="col-md-4 offset-md-2 ">
                    <p>Your Powerful Shield against Germs</p>
                  </div>
                  <div className="col-md-4 offset-md-1 target-img">
                    <img src={Img2} width="100%" alt="" />
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};
