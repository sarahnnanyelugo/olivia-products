import React, { useState } from "react";
import { ProductsHolder } from "../Home/ProductsHolder";
import { NavLink, useLocation } from "react-router-dom";
import "./collection.scss";
import SelectDrop from "../../Components/SelectDrop/SelectDrop";
import PurchaseType from "../../Components/PurchaseType/PurchaseType";
import { allProductsData } from "../../TestData/allProductsData";

export const Collections: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") || ""; // Get category from URL
// Get products matching the category
const filteredProducts =
  category === "" || category === "*"
    ? allProductsData
    : allProductsData.filter(product =>
        product.category.some(
          cat => cat.toLowerCase() === category.toLowerCase()
        )
      );

  const [sortType, setSortType] = useState("price-asc"); // Default sort type
  const matchingProduct = allProductsData.find(product =>
    product.category.some(
      cat => cat.toLowerCase() === category.toLowerCase()
    )
  );
  
  const categoryHeading = matchingProduct?.heading || "Shop All";
  const categoryIntro = matchingProduct?.detail || "From sparkling dishes to nourished skin, Olivia delivers everyday essentials crafted for a cleaner home, a fresher space, and a more beautiful you.";
  const itemCount = filteredProducts.length;

  return (
    <div className="col-md-12 collection-section line">
      <h2>{categoryHeading}</h2>

      <p className="col-md-5 animate-charcter lineUp">
      {categoryIntro}
      </p>
      <div className="d-flex">
        {" "}
        <p style={{ flexGrow: 1, color: "grey" , fontSize:"30px"}}>
    {itemCount} Item{itemCount !== 1 ? "s" : ""}
  </p>
        <div
          className="sort-bar  col-md-"
          style={{
            borderRight: "solid 1px #e7e7e7",
            borderRadius: "none",
            marginRight: "10px",
          }}
        >
          {" "}
          <PurchaseType />
        </div>
        <div
          className="sort-bar  col-md-"
          style={{
            borderRight: "solid 1px #e7e7e7",
            borderRadius: "none",
            marginRight: "10px",
          }}
        >
          <SelectDrop />
        </div>
        <div className="sort-bar  col-md-2">
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="form-select"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-desc">Rating: High to Low</option>
            <option value="rating-asc">Rating: Low to High</option>
          </select>
        </div>
      </div>
      <hr />

      <ProductsHolder category={category} viewType="grid" sortType={sortType} />
    </div>
  );
};
