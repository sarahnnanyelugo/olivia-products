import React, { useEffect, useState } from "react";
import { Lower } from "./Lower";
import { Middle } from "./Middle";
import { Upper } from "./Upper";
import "./top-nav.scss";

export const TopNav = () => {
  const location = useLocation();
  let currentUrl;
  useEffect(() => {
    currentUrl = location.pathname;
  });
  useEffect(() => {
    if (prevUrlRef.current !== currentUrl) {
      prevUrlRef.current = currentUrl;
      console.log(currentUrl);
      setTimeout(() => {
        switch (currentUrl) {
          case "/login":
          case "/sign-up":
            setShowNav(false);
            break;
          default:
            setShowNav(true);
            break;
        }
        console.log(currentUrl, showNav);
      }, 10);
    }
  });
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
  ////////////////////////////////////////////

  return (
    <div className="top-nav sticky">
      <div className={`upper ${scrollPosition > 50 ? "hide" : ""}`}>
        <Upper />
      </div>
      <div className="middle ">
        <Middle />
      </div>
      <div className={`lower ${scrollPosition > 50 ? "hide" : ""}`}>
        <Lower />
      </div>
    </div>
  );
};
