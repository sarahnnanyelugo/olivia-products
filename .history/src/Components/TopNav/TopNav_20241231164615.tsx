import React, { useEffect, useState } from "react";
import { Lower } from "./Lower";
import { Middle } from "./Middle";
import { Upper } from "./Upper";
import "./top-nav.scss";

export const TopNav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleOpenCart = () => {
    setIsOffCanvasOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="top-nav sticky">
      <div className={`upper ${scrollPosition > 50 ? "hide" : ""}`}>
        <Upper />
      </div>
      <div className="middle ">
        <Middle openCart={handleOpenCart} />
      </div>
      <div className={`lower ${scrollPosition > 50 ? "hide" : ""}`}>
        <Lower />
      </div>
    </div>
  );
};
