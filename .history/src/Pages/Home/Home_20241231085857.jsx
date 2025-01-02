import React, { useState } from "react";
import Video from "../../assets/images/home-video.mp4";
import Power from "../../assets/images/power.png";
import Money from "../../assets/images/money.png";
import Flower from "../../assets/images/flower.png";
import Plastic from "../../assets/images/plastic.png";
import Testifier from "../../assets/images/fast.avif";
import Testifier2 from "../../assets/images/oprah.avif";
import Testifier3 from "../../assets/images/corp.avif";
import Testifier4 from "../../assets/images/today.avif";
import "./home.scss";
import CountUp from "react-countup";
import { allProductsData } from "../../TestData/allProductsData";
import MainProduct from "../../Components/MainProducts/MainProducts";

export const Home = () => {
  const visibleItems = 4; // Number of items visible at a time
  const totalItems = allProductsData.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
      setIsTransitioning(false);
    }, 500); // Match with transition duration
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
      setIsTransitioning(false);
    }, 500); // Match with transition duration
  };

  const visibleProducts = [
    ...allProductsData.slice(currentIndex, currentIndex + visibleItems),
    ...allProductsData.slice(
      0,
      Math.max(0, currentIndex + visibleItems - totalItems)
    ),
  ];

  return (
    <div className="home-div">
      <video
        className="viddeo"
        width="100%"
        autoPlay
        loop
        muted
        playsInline
        controls
        src={Video}
      ></video>
      <div className="stats">
        <center>
          <div className="col-md-8">
            <h1>
              <CountUp
                start={0}
                end={1000000}
                duration={2}
                prefix=" "
                suffix="+"
                enableScrollSpy={true}
              />
              Homes Have Made the Switch
            </h1>
            <div className="d-md-flex">
              <div className="col-md-3 stats-data">
                <img src={Power} width="100px" alt="Power Icon" />
                <h6>Powerfully Effective</h6>
                <p>
                  <CountUp
                    start={0}
                    end={90000}
                    duration={2}
                    suffix="+"
                    enableScrollSpy={true}
                  />
                  5-star reviews
                </p>
              </div>
              <div className="col-md-3 stats-data">
                <img src={Plastic} width="100px" alt="Plastic Icon" />
                <h6>Eco-friendly</h6>
                <p>Compostable paper-based packaging</p>
              </div>
              <div className="col-md-3 stats-data">
                <img src={Flower} width="100px" alt="Flower Icon" />
                <h6>Clean Ingredients</h6>
                <p>Safe for use around kids and pets</p>
              </div>
              <div className="col-md-3 stats-data">
                <img src={Money} width="100px" alt="Money Icon" />
                <h6>Money-Saving</h6>
                <p>Never pay for water or plastic packaging</p>
              </div>
            </div>
          </div>
        </center>
      </div>
      <div className="category-div">
        <center>
          <h1>Shop By Category</h1>
          <p>
            Explore all of our reusable and sustainable household cleaning
            products
          </p>
        </center>
        <div className="col-md-12">
          <div className="carousel-container">
            <div
              className="carousel"
              style={{
                display: "flex",
                gap: "15px",
                transform: `translateX(-${
                  (currentIndex * 100) / visibleItems
                }%)`,
                transition: isTransitioning
                  ? "transform 0.5s ease-in-out"
                  : "none",
              }}
            >
              {visibleProducts.map((product, index) => (
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
          <div className="d-flex justify-content-between align-items-center my-3">
            <button className="btn btn-secondary" onClick={handlePrev}>
              Prev
            </button>
            <button className="btn btn-secondary" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="testifiers-div d-md-flex">
        <div className="col-md-3 testifiers">
          <center>
            <h5>"Best sustainable cleaning products”</h5>
            <img src={Testifier} width="154px" alt="Testifier 1" />
          </center>
        </div>
        <div className="col-md-3 testifiers">
          <center>
            <h5>Best for the Environment</h5>
            <img src={Testifier2} width="154px" alt="Testifier 2" />
          </center>
        </div>
        <div className="col-md-3 testifiers">
          <center>
            <h5>"Tried the whole line and absolutely love it. It's genius"</h5>
            <img src={Testifier3} width="104px" alt="Testifier 3" />
          </center>
        </div>
        <div className="col-md-3 testifiers">
          <center>
            <h5>World Changing Ideas</h5>
            <img src={Testifier4} width="104px" alt="Testifier 4" />
          </center>
        </div>
      </div>
      <center>
        <h1>Bestsellers</h1>
      </center>
    </div>
  );
};
