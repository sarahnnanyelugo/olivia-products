import { useState, createRef } from "react";
import { Product } from "./Product";
import "./products-slide.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Desktop } from "../../../Utils/mediaQueries";
import Product1 from "../../../assets/images/product1.avif";
import Product2 from "../../../assets/images/product2.avif";
import Product3 from "../../../assets/images/product3.avif";
import Product4 from "../../../assets/images/product4.avif";
import Product5 from "../../../assets/images/product5.avif";
import Product6 from "../../../assets/images/product6.avif";
import Product7 from "../../../assets/images/product7.avif";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const items = [
  { id: 1, prdImg: Product1, price: "$10", name: "Hair Care" },
  { id: 2, prdImg: Product2, price: "$20", name: "Kitchen Use" },
  { id: 3, prdImg: Product3, price: "$30", name: "Auto maintainance" },
  { id: 4, prdImg: Product4, price: "$40", name: "Laundry" },
  { id: 5, prdImg: Product5, price: "$50", name: "Home hygeine" },
  { id: 6, prdImg: Product6, price: "$60", name: "Body Care" },
  { id: 7, prdImg: Product7, price: "$70" },
];
export const ProductsSlide = ({ deviceType = "desktop" }) => {
  return (
    <div className="sliding-products ">
      {" "}
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={deviceType !== "mobile"}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={800}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {items.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </Carousel>
    </div>
  );
};
