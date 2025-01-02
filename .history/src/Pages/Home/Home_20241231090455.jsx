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
const visibleItems = 4; // Number of items visible at a time

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(visibleItems); // Start at the first duplicated section
  const [isTransitioning, setIsTransitioning] = useState(false);

  const containerRef = useRef < HTMLDivElement > null;

  // Duplicate data to enable seamless looping
  const virtualizedProducts = [
    ...allProductsData.slice(-visibleItems), // Add last `visibleItems` at the beginning
    ...allProductsData,
    ...allProductsData.slice(0, visibleItems), // Add first `visibleItems` at the end
  ];

  // Handle Next Click
  const handleNext = () => {
    if (isTransitioning) return; // Prevent spamming buttons
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Handle Prev Click
  const handlePrev = () => {
    if (isTransitioning) return; // Prevent spamming buttons
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Reset position when reaching cloned sections
  useEffect(() => {
    if (!isTransitioning) return;

    const handleTransitionEnd = () => {
      setIsTransitioning(false);

      // Reset to actual positions without visual jump
      if (currentIndex === 0) {
        setCurrentIndex(allProductsData.length);
      } else if (currentIndex === virtualizedProducts.length - visibleItems) {
        setCurrentIndex(visibleItems);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("transitionend", handleTransitionEnd);
      return () =>
        container.removeEventListener("transitionend", handleTransitionEnd);
    }
  }, [currentIndex, isTransitioning, virtualizedProducts.length]);

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
      <div id="bestsellers-slider" className="carousel-wrapper">
        <button className="btn btn-secondary" onClick={handlePrev}>
          Prev
        </button>
        <div className="carousel-container" ref={containerRef}>
          <div
            className="carousel"
            style={{
              display: "flex",
              gap: "15px",
              transform: `translateX(-${(100 / visibleItems) * currentIndex}%)`,
              transition: isTransitioning
                ? "transform 0.5s ease-in-out"
                : "none",
              width: `${(virtualizedProducts.length / visibleItems) * 100}%`,
            }}
          >
            {virtualizedProducts.map((product, index) => (
              <div
                key={index}
                style={{
                  flex: `0 0 ${100 / visibleItems}%`,
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
        <button className="btn btn-secondary" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};
