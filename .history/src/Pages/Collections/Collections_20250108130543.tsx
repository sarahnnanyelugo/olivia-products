import React, { useState } from "react";
import { ProductsHolder } from "../Home/ProductsHolder";
import { useLocation } from "react-router-dom";
// import { allProductsData } from "../TestData/allProductsData"; // Assuming this contains product type
import "./collection.scss";

// Define the product type based on allProductsData structure
interface Product {
  heading: string;
  firstImg: string;
  hoverImg: string;
  id: number;
  price: number;
  name: string;
  additionalImgs: string[];
  category: string[];
}

export const Collections: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") || ""; // Get category from URL

  const [sortType, setSortType] = useState<string>("price-asc"); // Default sort type
  const [firstProduct, setFirstProduct] = useState<Product | null>(null); // Store first product details

  return (
    <div className="col-md-12 collection-section">
      {/* Display the heading */}
      {firstProduct && (
        <div className="product-heading mb-4">
          <h2>{firstProduct.heading}</h2>
        </div>
      )}

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

      <ProductsHolder
        category={category}
        viewType="grid"
        sortType={sortType}
        onFirstProductChange={setFirstProduct} // Pass callback
      />
    </div>
  );
};
