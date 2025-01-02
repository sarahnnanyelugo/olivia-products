import React, { useEffect, useState } from "react";
import { Lower } from "./Lower";
import { Middle } from "./Middle";
import { Upper } from "./Upper";
import "./top-nav.scss";

export const TopNav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

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
    <div className="top-nav">
      <div className={`upper ${scrollPosition > 50 ? "hide" : ""}`}>
        <Upper />
      </div>
      <div className="middle sticky">
        <Middle />
      </div>
      <div className={`lower ${scrollPosition > 50 ? "hide" : ""}`}>
        <Lower />
      </div>
    </div>
  );
};
