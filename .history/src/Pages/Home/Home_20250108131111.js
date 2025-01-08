import React, { useState } from "react";
import Video from "../../assets/images/home-video.mp4";
import Power from "../../assets/images/power.png";
import Money from "../../assets/images/money.png";
import Flower from "../../assets/images/flower.png";
import Plastic from "../../assets/images/plastic.png";
import Product1 from "../../assets/images/product1.avif";
import Product2 from "../../assets/images/product2.avif";
import Product3 from "../../assets/images/product3.avif";
import Product4 from "../../assets/images/product4.avif";
import Product5 from "../../assets/images/product5.avif";
import Product6 from "../../assets/images/product6.avif";
import Product7 from "../../assets/images/product7.avif";
import Testifier from "../../assets/images/fast.avif";
import Testifier2 from "../../assets/images/oprah.avif";
import Testifier3 from "../../assets/images/corp.avif";
import Testifier4 from "../../assets/images/today.avif";
import MissionImg from "../../assets/images/mission-img.avif";
import CountUp from "react-countup";
import { ProductsSlide } from "./ProductsSlide/ProductsSlide";
import { ProductsHolder } from "./ProductsHolder";
import { FaAngleRight } from "react-icons/fa";

import "./home.scss";
import { Link } from "react-router-dom";
import TestimonialCarousel from "./Testimonials";

const items = [
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
  Product7,
];
interface Product {
  heading: string;
  firstImg: string;
  hoverImg: string;
  id: number;
  price: number;
  name: string;
  additionalImgs: string[];
  category: string[];
}
export const Home = () => {
  const [firstProduct, setFirstProduct] = (useState < Product) | (null > null); // Store first product details

  return (
    <div className="home-div">
      {/* Video Section */}
      <video
        className="video"
        width="100%"
        autoPlay
        loop
        muted
        playsInline
        controls
        src={Video}
      ></video>

      {/* Stats Section */}
      <div className="stats">
        <center>
          <div className="col-md-8">
            <h1>
              <CountUp
                start={0}
                end={1000000}
                duration={2}
                suffix="+"
                enableScrollSpy={true}
              />{" "}
              Homes Have Made the Switch
            </h1>
            <div className="d-md-flex">
              {/* Powerfully Effective */}
              <div className="col-md-3 stats-data">
                <img src={Power} alt="Power" width="100px" />
                <h6>Powerfully Effective</h6>
                <p>
                  <CountUp
                    start={0}
                    end={90000}
                    duration={2}
                    suffix="+"
                    enableScrollSpy={true}
                  />{" "}
                  5-star reviews
                </p>
              </div>
              {/* Eco-friendly */}
              <div className="col-md-3 stats-data">
                <img src={Plastic} alt="Eco-friendly" width="100px" />
                <h6>Eco-friendly</h6>
                <p>Compostable paper-based packaging</p>
              </div>
              {/* Clean Ingredients */}
              <div className="col-md-3 stats-data">
                <img src={Flower} alt="Clean Ingredients" width="100px" />
                <h6>Clean Ingredients</h6>
                <p>Safe for use around kids and pets</p>
              </div>
              {/* Money-Saving */}
              <div className="col-md-3 stats-data">
                <img src={Money} alt="Money-Saving" width="100px" />
                <h6>Money-Saving</h6>
                <p>Never pay for water or plastic packaging</p>
              </div>
            </div>
          </div>
        </center>
      </div>

      {/* Category Section */}
      <div className="category-div">
        <center>
          <h1>Shop By Category</h1>
          <p>
            Explore all of our reusable and sustainable household cleaning
            products
          </p>
        </center>
        <div className="col-md-12 prd-slid">
          <ProductsSlide items={items} active={0} />
        </div>
      </div>

      {/* Testifiers Section */}
      <div className="testifiers-div d-md-flex">
        <div className="col-md-3 testifiers">
          <center>
            <h5>"Best sustainable cleaning products”</h5>
            <img src={Testifier} alt="Testifier 1" width="154px" />
          </center>
        </div>
        <div className="col-md-3 testifiers">
          <center>
            <h5>Best for the Environment</h5>
            <img src={Testifier2} alt="Testifier 2" width="154px" />
          </center>
        </div>
        <div className="col-md-3 testifiers">
          <center>
            <h5>"Tried the whole line and absolutely love it. It's genius"</h5>
            <img src={Testifier3} alt="Testifier 3" width="104px" />
          </center>
        </div>
        <div className="col-md-3 testifiers">
          <center>
            <h5>World Changing Ideas</h5>
            <img src={Testifier4} alt="Testifier 4" width="104px" />
          </center>
        </div>
      </div>

      {/* Bestsellers Section */}
      <center>
        <h1>Bestsellers</h1>
      </center>
      <ProductsHolder onFirstProductChange={setFirstProduct} />

      <div className="mission-vision col-md-10 offset-md-1 d-md-flex mt-5">
        <div className="col-md-6">
          <img src={MissionImg} width="100%" />
        </div>
        <div className="col-md-6 statement" style={{ paddingLeft: "50px" }}>
          <h5>OUR MISSION</h5>

          <h2>Creating a World Without Waste</h2>
          <p>
            We’re on a mission to make it easy for everyone to make sustainable
            choices.
          </p>
          <Link to={"/our-mission"}>
            Our Mission <FaAngleRight />
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <h2>Over 100,000 5-Star Reviews</h2>
      </center>
      <TestimonialCarousel />
    </div>
  );
};
