import React, { useState, useEffect } from "react";
import { Lower } from "./Lower";
import { Middle } from "./Middle";
import { Upper } from "./Upper";
import "./top-nav.scss";
import { ProductsHolder } from "../../Pages/Home/ProductsHolder";

export const TopNav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false); // Lifted state for the offcanvas

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to open cart (triggered by button in Middle)
  const openCart = () => {
    setIsOffCanvasOpen(true);
  };

  return (
    <div className="top-nav sticky">
      <div className={`upper ${scrollPosition > 50 ? "hide" : ""}`}>
        <Upper />
      </div>
      <div className="middle ">
        <Middle openCart={openCart} /> {/* Pass the openCart function */}
      </div>
      <div className={`lower ${scrollPosition > 50 ? "hide" : ""}`}>
        <Lower />
      </div>

      {/* Pass isOffCanvasOpen and setIsOffCanvasOpen to ProductsHolder if needed */}
      <ProductsHolder
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
    </div>
  );
};
