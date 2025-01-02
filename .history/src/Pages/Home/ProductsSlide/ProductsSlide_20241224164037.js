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
    for (let i = active - 2; i < active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = items.length + i;
      } else if (i >= items.length) {
        index = i % items.length;
      }
      const level = active - i;
      itemsArray.push(
        <CSSTransition key={index} classNames={direction} timeout={1000}>
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
