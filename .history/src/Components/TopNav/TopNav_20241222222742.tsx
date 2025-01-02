import React from "react";
import { Lower } from "./Lower";
import { Middle } from "./Middle";
import { Upper } from "./Upper";
import "./top-nav.scss";
export const TopNav = () => {
  return (
    <div>
      <Upper />
      <Middle />

      <Lower />
    </div>
  );
};
