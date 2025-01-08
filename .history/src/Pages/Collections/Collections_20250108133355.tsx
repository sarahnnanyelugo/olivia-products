import React, { useState } from "react";
import { ProductsHolder } from "../Home/ProductsHolder";
import { useLocation } from "react-router-dom";
import "./collection.scss";

export const Collections: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") || ""; // Get category from URL

  const [sortType, setSortType] = useState("price-asc"); // Default sort type

  return (
    <div className="col-md-12 collection-section">
      <h1>Shop All</h1>
      <p>
        Sustainable cleaning essentials that make going eco easier than ever
      </p>
      <p>49 Items</p>
      {/* Sort Dropdown */}
      <div className="sort-bar mb-4 col-md-2">
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

      <ProductsHolder category={category} viewType="grid" sortType={sortType} />
    </div>
  );
};
