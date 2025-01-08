import React from "react";
import { ProductsHolder } from "../Home/ProductsHolder";
import { useLocation } from "react-router-dom";
import "./collection.scss";
export const Collections: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") || ""; // Get category from URL

  return (
    {allProducts ?(
      <><div className="col-md-12 collection-section   ">
      <ProductsHolder category={category} viewType="grid" />
    </div></>
    )}
    
  );
};
