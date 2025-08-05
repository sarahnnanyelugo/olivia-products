import React from "react";
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
import MissionImg from "../../assets/images/group6.png";
import CountUp from "react-countup";
import { ProductsSlide } from "./ProductsSlide/ProductsSlide";
import { ProductsHolder } from "./ProductsHolder";
import { FaAngleRight } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

import "./home.scss";
import { Link } from "react-router-dom";
import TestimonialCarousel from "./Testimonials";
import { TabletAndBelow } from "../../Utils/mediaQueries";
import { HomeSlide } from "./HomeSlide/HomeSlide";
import FBSocials from "./FBSocials";
import TwitterHandle from "./TwitterHandle/TwitterHandle";
import YouTube from "./Youtube";
const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const Home = () => {
  return (
    <div className="home-div">
      {/* <video
        className="video"
        width="100%"
        autoPlay
        loop
        muted
        playsInline
        controls
        src={Video}
      ></video> */}

      <HomeSlide />
      {/* Stats Section */}

      <div className="col-md-8 offset-md-2 d-md-flex abt-div">
        <div className="col-md-6 col-12">
          <h6>ABOUT US</h6>
          <h5>
            One of the largest manufacturer and distributor of Laundry, Hygiene
            and Hair Care products in Nigeria.
          </h5>
        </div>
        <div className="col-md-6">
          <p>
            As the foremost personal care product manufacturers in Nigeria, our
            product portfolio covers almost all the hygiene and healthcare
            essentials for your daily lives. At Aspira, our dream is to ‘Develop
            a Healthier Nation’. By manufacturing a wide range of affordable and
            superior quality products that are suitable for the entire family –
            from soaps for babies to adults with sensitive skin; oral care
            products, luxurious beauty soaps to enhance your skin, and jellies
            to protect your skin.
          </p>
          <button>Explore More</button>
        </div>
      </div>

      <div className="products-intro-corner">
        {" "}
        <center>
          <div className="col-md-5 home-prd">
            <h6>OUR PRODUCTS</h6>
            <h2>We touch millions of lives every day!</h2>
            <p>
              All of our products go through stringent quality control measures,
              and their efficacy, safety, and Purity, are all well established.
              A product leaves our factory gates only when we are 100% satisfied
              about its quality. It’s no surprise therefore, that Aspira
              products are the most popular personal care products in Nigeria.
            </p>
          </div>
        </center>
        {/* Category Section */}
        <div className="category-div">
          <div className="col-md-12 prd-slid">
            <ProductsSlide options={OPTIONS} />
          </div>
        </div>
      </div>

      {/* Testifiers Section */}
      <div className="testifiers-div d-md-flex">
        <div className="col-12 col-md-6 d-flex">
          <div className="col-6 testifiers">
            <center>
              <h5>"Best sustainable cleaning products”</h5>
              <img src={Testifier} alt="Testifier 1" width="154px" />
            </center>
          </div>
          <div className="col-6  testifiers">
            <center>
              <h5>Best for the Environment</h5>
              <img src={Testifier2} alt="Testifier 2" width="154px" />
            </center>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex">
          {" "}
          <div className="col-6 testifiers">
            <center>
              <h5>
                "Tried the whole line and absolutely love it. It's genius"
              </h5>
              <img src={Testifier3} alt="Testifier 3" width="104px" />
            </center>
          </div>
          <div className="col-6 testifiers">
            <center>
              <h5>World Changing Ideas</h5>
              <img src={Testifier4} alt="Testifier 4" width="104px" />
            </center>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <center>
        <h1>Our Bestsellers</h1>
      </center>
      <ProductsHolder showOnlyBestSellers={true} />

      <div className=" col-md-10 offset-md-1 d-flex mt-5">
        <div className="col-md-6 mission-vision">
          <img src={MissionImg} width="100%" alt="" />
        </div>
        <div className="col-md-6 statement">
          <h5>OLIVIACARE</h5>

          <h2>
            Make A Difference With <span>Olivia Products</span>
          </h2>
          <p>
            We are committed to positively impact the daily lives of people, and
            to empower communities through our corporate social responsibility
            activities. Our main focus is on helping the youth by providing
            adequate support to develop their skills, and improving the
            education system.
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
      <div className="news-div">
        <center>
          <h6>NEWS AND EVENTS</h6>
          <div className="col-md-6">
            <h3>Get To Know More About Us From The Media</h3>
            <p>
              Get to know more about Aspira – the leading personal care product
              suppliers in Nigeria – with news and stories appearing in
              prominent media.
            </p>
          </div>
        </center>
        <div className="news-inner">
          <div className="col-md-10 offset-md-1 d-md-flex ">
            <div className="col-md-4">
              <FBSocials />
            </div>
            <div className="col-md-4">
              <TwitterHandle />
            </div>{" "}
            <div className="col-md-4">
              <YouTube />
            </div>
          </div>
        </div>
      </div>

      <center>
        <h2>Over 100,000 5-Star Reviews</h2>
      </center>
      <TestimonialCarousel />
    </div>
  );
};
