import React, { useState, useRef, useEffect } from "react";
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
import LaundryTab from "../../assets/images/laundry-tab.avif";
import LaundryTab2 from "../../assets/images/laundry-tab-u.avif";
import "./home.scss";
import CountUp from "react-countup";
import { ProductsSlide } from "./ProductsSlide/ProductsSlide";
import MainProduct from "../../Components/MainProducts/MainProducts";
import { allProductsData } from "../../TestData/allProductsData";
const images = [
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
  Product7,
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

export const Home = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const visibleItems = 4;

  // Extend products array for seamless looping
  const extendedProducts = [
    ...allProductsData.slice(-visibleItems),
    ...allProductsData,
    ...allProductsData.slice(0, visibleItems),
  ];

  // Adjust the actual index to match the extended array
  const actualStartIndex = startIndex + visibleItems;

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Handle looping effect after the transition ends
  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);

        if (startIndex === -1) {
          setStartIndex(allProductsData.length - 1);
        } else if (startIndex === allProductsData.length) {
          setStartIndex(0);
        }
      }, 500); // Match the transition duration
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning, startIndex, allProductsData.length]);

  return (
    <div className="home-div">
      {" "}
      <video
        className="viddeo "
        width="100%"
        autoplay
        loop
        muted
        playsinline
        controls
        src={Video}
      ></video>
      <div className="stats">
        <center>
          <div className="col-md-8">
            <h1>
              {" "}
              <CountUp
                start={0}
                end={1000000}
                duration={2}
                decimal=""
                prefix=" "
                suffix="+"
                enableScrollSpy={true}
              />
              Homes Have Made the Switch
            </h1>
            <div className="d-md-flex">
              <div className="col-md-3 stats-data">
                <img src={Power} width="100px" />
                <h6>Powerfully Effective</h6>
                <p>
                  {" "}
                  <CountUp
                    start={0}
                    end={90000}
                    duration={2}
                    decimal=""
                    prefix=" "
                    suffix="+"
                    enableScrollSpy={true}
                  />{" "}
                  5-star reviews
                </p>
              </div>{" "}
              <div className="col-md-3 stats-data">
                {" "}
                <img src={Plastic} width="100px" />
                <h6>Eco-friendly</h6>
                <p>Compostable paper-based packaging</p>
              </div>{" "}
              <div className="col-md-3 stats-data">
                <img src={Flower} width="100px" />
                <h6>Clean Ingredients</h6>
                <p>Safe for use around kids and pets</p>
              </div>{" "}
              <div className="col-md-3 stats-data">
                {" "}
                <img src={Money} width="100px" />
                <h6>Money-Saving</h6>
                <p>Never pay for water or plastic packaging</p>
              </div>
            </div>
          </div>
        </center>
      </div>
      <div className="category-div">
        {" "}
        <center>
          <h1>Shop By Category</h1>
          <p>
            Explore all of our reusable and sustainable household cleaning
            products
          </p>{" "}
        </center>
        <div className="col-md-12">
          {" "}
          <ProductsSlide items={items} active={0} />
        </div>
      </div>
      <div className="testifiers-div d-md-flex">
        <div className="col-md-3 testifiers">
          <center>
            {" "}
            <h5>"Best sustainable  cleaning products”</h5>
            <img src={Testifier} width="154px" />
          </center>
        </div>{" "}
        <div className="col-md-3 testifiers">
          <center>
            <h5>Best for the Environment</h5>
            <img src={Testifier2} width="154px" />
          </center>
        </div>{" "}
        <div className="col-md-3 testifiers">
          <center>
            <h5>"Tried the whole line and absolutely love it. It's genius"</h5>
            <img src={Testifier3} width="104px" />
          </center>
        </div>{" "}
        <div className="col-md-3 testifiers">
          <center>
            {" "}
            <h5>World Changing Ideas</h5>
            <img src={Testifier4} width="104px" />
          </center>
        </div>
      </div>
      <center>
        <h1>Bestsellers</h1>
      </center>
      <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button className="btn btn-secondary" onClick={handlePrev}>
            Prev
          </button>
          <button className="btn btn-secondary" onClick={handleNext}>
            Next
          </button>
        </div>
        <div
          className="carousel-container"
          style={{
            overflow: "hidden",
            width: "100%",
          }}
        >
          <div
            className="carousel"
            style={{
              display: "flex",
              transition: isTransitioning
                ? "transform 0.5s ease-in-out"
                : "none",
              transform: `translateX(-${
                (100 / visibleItems) * actualStartIndex
              }%)`,
              width: `${(extendedProducts.length / visibleItems) * 20}%`,
            }}
          >
            {extendedProducts.map((product, index) => (
              <div
                key={index}
                style={{
                  flex: `0 0 ${100 / visibleItems}%`,
                  boxSizing: "border-box",
                  padding: "10px", // Add space between items
                }}
              >
                <MainProduct
                  firstImg={product.firstImg}
                  hoverImg={product.hoverImg}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
