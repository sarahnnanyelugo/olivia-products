import React, { useState } from "react";
import { ProductsHolder } from "../Home/ProductsHolder";
import { NavLink, useLocation } from "react-router-dom";
import "./collection.scss";
import SelectDrop from "../../Components/SelectDrop/SelectDrop";
import PurchaseType from "../../Components/PurchaseType/PurchaseType";

export const Collections: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") || ""; // Get category from URL

  const [sortType, setSortType] = useState("price-asc"); // Default sort type

  return (
    <div className="col-md-12 collection-section">
      <h2>Shop All</h2>
      <p>
        Sustainable cleaning essentials that make going eco easier than ever
      </p>
      <div className="d-flex">
        {" "}
        <p style={{ flexGrow: 1, color: "grey" }}>49 Items</p>
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
