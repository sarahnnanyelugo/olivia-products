import React from "react";
import { ProductsHolder } from "../Home/ProductsHolder";
import { useLocation } from "react-router-dom";

export const Collections = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category"); // Get category from URL

  return (
    <div>
      <ProductsHolder category={category} />
    </div>
  );
};
