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
        <p style={{ flexGrow: 1, color: "grey" }}>49 Items</p> <PurchaseType />
        <div
          className="sort-bar  col-md-"
          style={{ borderRight: "solid 1px #e7e7e7", borderRadius: "none" }}
        >
          {/* <SelectDrop /> */}
        </div>
      </div>
      <hr />

      <ProductsHolder category={category} viewType="grid" sortType={sortType} />
    </div>
  );
};
