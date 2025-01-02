import React, { useState, useRef } from "react";
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
  // const [startIndex, setStartIndex] = useState(0);
  // const visibleItems = 4;

  // const handleNext = () => {
  //   setStartIndex((prevIndex) => (prevIndex + 1) % allProductsData.length);
  // };

  // const handlePrev = () => {
  //   setStartIndex(
  //     (prevIndex) =>
  //       (prevIndex - 1 + allProductsData.length) % allProductsData.length
  //   );
  // };

  // const visibleProducts = allProductsData.slice(
  //   startIndex,
  //   startIndex + visibleItems
  // );

  // if (visibleProducts.length < visibleItems) {
  //   visibleProducts.push(
  //     ...allProductsData.slice(0, visibleItems - visibleProducts.length)
  //   );
  // }
  const visibleItems = 4; // Number of items visible at a time
  const totalItems = allProductsData.length;
  const [currentIndex, setCurrentIndex] = useState(visibleItems); // Start at the first real slide
  const sliderRef = useRef < HTMLDivElement > null; // Correct useRef for DOM element
  const transitionDuration = 500; // Transition duration in milliseconds

  // Create clones for seamless looping
  const items = [
    ...allProductsData.slice(-visibleItems), // Clone last items at the start
    ...allProductsData,
    ...allProductsData.slice(0, visibleItems), // Clone first items at the end
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);

    // Reset to the first real slide after reaching the end of the cloned slides
    setTimeout(() => {
      if (currentIndex >= totalItems + visibleItems) {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "none"; // Disable transition temporarily
          sliderRef.current.style.transform = `translateX(-${
            visibleItems * (100 / visibleItems)
          }%)`;
        }
        setCurrentIndex(visibleItems); // Reset index
      }
    }, transitionDuration);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);

    // Reset to the last real slide after reaching the start of the cloned slides
    setTimeout(() => {
      if (currentIndex <= 0) {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "none"; // Disable transition temporarily
          sliderRef.current.style.transform = `translateX(-${
            totalItems * (100 / visibleItems)
          }%)`;
        }
        setCurrentIndex(totalItems); // Reset index
      }
    }, transitionDuration);
  };

  // Re-enable transitions after DOM updates
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    }
  }, [currentIndex]);

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
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button className="btn btn-secondary" onClick={handlePrev}>
          Prev
        </button>
        <button className="btn btn-secondary" onClick={handleNext}>
          Next
        </button>
      </div>
      {/* <div className=" row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
        {visibleProducts.map((product, index) => (
          <div key={index}>
            <MainProduct
              firstImg={product.firstImg}
              hoverImg={product.hoverImg}
            />
          </div>
        ))}
      </div> */}
      <div
        style={{
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          ref={sliderRef}
          style={{
            display: "flex",
            gap: "15px",
            transition: `transform ${transitionDuration}ms ease-in-out`,
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
          }}
        >
          {items.map((product, index) => (
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
    </div>
  );
};
