import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { NextButton, PrevButton, usePrevNextButtons } from "./ArrowButtons";
import { DotButton, useDotButton } from "./DotButton";
import "./products-slide.scss";
import { useAutoplay } from "./Autoplay";
import { Product } from "./Product";
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";

import Product1 from "../../../assets/images/group1.png";
import Product2 from "../../../assets/images/group2.png";
import Product3 from "../../../assets/images/group3.png";
import Product4 from "../../../assets/images/group4.png";
import Product5 from "../../../assets/images/group5.png";
import Product6 from "../../../assets/images/group8.png";
import Product7 from "../../../assets/images/group9.png";
import Product8 from "../../../assets/images/group8.png";
import MainProduct from "../../../Components/MainProducts/MainProducts";
import { allProductsData } from "../../../TestData/allProductsData";

const items = [
  { id: 1, prdImg: Product1, price: "$10", name: "Hair Care" },
  { id: 2, prdImg: Product2, price: "$20", name: "Kitchen Use" },
  { id: 3, prdImg: Product3, price: "$30", name: "Auto Maintainance" },
  { id: 4, prdImg: Product4, price: "$40", name: "Laundry" },
  { id: 5, prdImg: Product5, price: "$50", name: "Home Hygiene" },
  { id: 6, prdImg: Product6, price: "$60", name: "Body Care" },
  { id: 7, prdImg: Product7, price: "$70", name: "Unlabeled" },
];

export const ProductsSlide = (props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      skipSnaps: false, // Important so it doesn't snap weird at the edges
      align: "center", // Center the active slide nicely
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;

    const updateSlideStyles = () => {
      const slides = emblaApi.slideNodes();
      const scrollSnapList = emblaApi.scrollSnapList();
      const scrollProgress = emblaApi.scrollProgress();
      const selectedIndex = emblaApi.selectedScrollSnap();

      slides.forEach((slideNode, index) => {
        const diffToTarget = scrollSnapList[index] - scrollProgress;
        const distance = Math.abs(diffToTarget);

        // 🎯 Make middle slide large, others smaller
        const scale =
          index === selectedIndex ? 1.25 - Math.min(distance, 1) * 0.1 : 0.7; // <<< non-selected slides smaller

        const translateY =
          index === selectedIndex ? -20 * (1 - Math.min(distance, 1)) : 0; // <<< only focus slide moves slightly up

        slideNode.style.transform = `scale(${scale}) translateY(${translateY}px)`;
        slideNode.style.transition = "transform 0.5s ease"; // Smooth transition
      });
    };

    emblaApi.on("scroll", updateSlideStyles);
    emblaApi.on("reInit", updateSlideStyles);
    updateSlideStyles(); // Run once initially

    return () => {
      emblaApi.off("scroll", updateSlideStyles);
      emblaApi.off("reInit", updateSlideStyles);
    };
  }, [emblaApi]);

  return (
    <div className="embla col-md-12">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {items.map((item) => (
            <div className="embla__slide" key={item.id}>
              <Product {...item} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onAutoplayButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() =>
                onAutoplayButtonClick(() => onDotButtonClick(index))
              }
              className={`embla__dot${
                index === selectedIndex ? " embla__dot--selected" : ""
              }`}
            />
          ))}
        </div>

        <button className="embla__play" onClick={toggleAutoplay} type="button">
          {autoplayIsPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
};

export default ProductsSlide;
