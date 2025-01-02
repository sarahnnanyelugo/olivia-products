import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Product } from "./Product";
import "./products-slide.scss";

export const ProductsSlide = ({ items, active: initialActive }) => {
  const [active, setActive] = useState(initialActive);
  const [direction, setDirection] = useState("");

  const moveLeft = () => {
    setActive((prevActive) => {
      const newActive = prevActive - 1 < 0 ? items.length - 1 : prevActive - 1;
      setDirection("left");
      return newActive;
    });
  };

  const moveRight = () => {
    setActive((prevActive) => {
      const newActive = (prevActive + 1) % items.length;
      setDirection("right");
      return newActive;
    });
  };

  const generateItems = () => {
    const itemsArray = [];
    const itemCount = 5; // Number of items to display at a time
    const range = Math.floor(itemCount / 2); // Number of items on either side of active item

    for (let i = active - range; i <= active + range; i++) {
      let index = i;
      if (i < 0) {
        index = items.length + i;
      } else if (i >= items.length) {
        index = i % items.length;
      }

      const level = active - i;
      itemsArray.push(
        <CSSTransition key={index} classNames={direction} timeout={1000} nodeRef={}>
          <Product id={items[index]} level={level} />
        </CSSTransition>
      );
    }
    return itemsArray;
  };

  return (
    <div id="carousel" className="noselect">
      <div className="arrow arrow-left" onClick={moveLeft}>
        <i className="fi-arrow-left"></i>
      </div>
      <TransitionGroup>{generateItems()}</TransitionGroup>
      <div className="arrow arrow-right" onClick={moveRight}>
        <i className="fi-arrow-right"></i>
      </div>
    </div>
  );
};
