import React, { useEffect, useState } from "react";
import { Lower } from "./Lower";
import { Middle } from "./Middle";
import { Upper } from "./Upper";
import { useLocation } from "react-router-dom"; // Import useLocation
import "./top-nav.scss";
import Nav from "react-bootstrap/Nav";

export const TopNav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation(); // Get current location

  // List of paths where TopNav should NOT be shown
  const excludedPaths = ["/login", "/register", "/wholesale-page"];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if the current path is in the excludedPaths list
  if (excludedPaths.includes(location.pathname)) {
    return null; // Do not render TopNav if the path is excluded
  }

  return (
    <div className="top-nav sticky">
      <div className={`upper ${scrollPosition > 50 ? "hide" : ""}`}>
        <Upper />
      </div>
      <div className="middle">
        <Middle />
      </div>
      <div className={`lower ${scrollPosition > 50 ? "hide" : ""}`}>
        <Lower />
      </div>
    </div>
  );
};
