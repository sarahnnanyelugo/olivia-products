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
      <div className="sort-dropdown">
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Default</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="rating-high-low">Rating: High to Low</option>
          <option value="rating-low-high">Rating: Low to High</option>
        </select>
      </div>
      <ProductsHolder category={category} viewType="grid" sortType={sortType} />
    </div>
  );
};
