// ProductsHolder.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CartOffcanvas from "../../Components/CartList/CartList";
import MainProduct from "../../Components/MainProducts/MainProducts";
import { allProductsData } from "../../TestData/allProductsData";
import { useCart } from "../../CartContext";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

export const ProductsHolder = ({
  category = "",
  viewType = "slide",
  sortType = "",
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [sortOrder, setSortOrder] = useState(""); // New state for sorting
  const visibleItems = 4;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromQuery = queryParams.get("category") || "";

  // Filter products by category
  const filteredProducts =
    categoryFromQuery === "*" || categoryFromQuery === ""
      ? allProductsData
      : allProductsData.filter((product) =>
          product.category.some(
            (cat) => cat.toLowerCase() === categoryFromQuery.toLowerCase()
          )
        );

  // Sorting logic based on sortOrder
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortType) {
      case "low-high-price":
        return a.price - b.price;
      case "high-low-price":
        return b.price - a.price;
      case "high-low-rating":
        return b.rating - a.rating;
      case "low-high-rating":
        return a.rating - b.rating;
      default:
        return 0;
    }
  });

  // For sliding view
  const extendedProducts = [
    ...filteredProducts.slice(-visibleItems),
    ...filteredProducts,
    ...filteredProducts.slice(0, visibleItems),
  ];
  const actualStartIndex = startIndex + visibleItems;

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        if (startIndex === -1) {
          setStartIndex(filteredProducts.length - 1);
        } else if (startIndex === filteredProducts.length) {
          setStartIndex(0);
        }
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning, startIndex, filteredProducts.length]);

  const {
    cart,
    setIsOffCanvasOpen,
    addToCart,
    handleRemoveFromCart,
    handleClearCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();
  useEffect(() => {
    if (sortedProducts.length > 0) {
      onFirstProductChange(sortedProducts[0]);
    }
  }, [sortedProducts, onFirstProductChange]);

  // Render logic based on viewType
  if (viewType === "grid") {
    return (
      <div className="products-grid-container">
        {/* Sort Dropdown */}

        <div className="products-grid">
          {sortedProducts.map((product, index) => (
            <div key={index} className="mb-4">
              <MainProduct
                productName={product.name}
                productPrice={product.price}
                firstImg={product.firstImg}
                hoverImg={product.hoverImg}
                rating={product.rating}
                id={product.id}
                onAddToCart={addToCart}
              />
            </div>
          ))}
        </div>

        {/* Cart Offcanvas */}
        <CartOffcanvas
          show={setIsOffCanvasOpen}
          onClose={() => setIsOffCanvasOpen(false)}
          cart={cart}
          onRemoveFromCart={handleRemoveFromCart}
          onClearCart={handleClearCart}
          onIncrementQuantity={incrementQuantity}
          onDecrementQuantity={decrementQuantity}
        />
      </div>
    );
  }

  // Sliding view (default)
  return (
    <center>
      <div className="prod-slide col-md-11">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <MdNavigateBefore
            onClick={handlePrev}
            style={{ color: "#003057 ", fontSize: "38px" }}
          />

          <MdNavigateNext
            onClick={handleNext}
            style={{ color: "#003057 ", fontSize: "38px" }}
          />
        </div>

        <div
          className="carousel"
          style={{
            display: "flex",
            transition: isTransitioning ? "transform 1s ease-in-out" : "none",
            transform: `translateX(-${
              (100 / visibleItems) * actualStartIndex
            }%)`,
            width: `${(extendedProducts.length / visibleItems) * 25}%`,
          }}
        >
          {extendedProducts.map((product, index) => (
            <div
              key={index}
              style={{
                flex: `0 0 ${100 / visibleItems}%`,
                boxSizing: "border-box",
                padding: "10px",
              }}
            >
              <MainProduct
                productName={product.name}
                productPrice={product.price}
                firstImg={product.firstImg}
                hoverImg={product.hoverImg}
                id={product.id}
                onAddToCart={addToCart}
              />
            </div>
          ))}
        </div>

        {/* Cart Offcanvas */}
        <CartOffcanvas
          show={setIsOffCanvasOpen}
          onClose={() => setIsOffCanvasOpen(false)}
          cart={cart}
          onRemoveFromCart={handleRemoveFromCart}
          onClearCart={handleClearCart}
          onIncrementQuantity={incrementQuantity}
          onDecrementQuantity={decrementQuantity}
        />
      </div>
    </center>
  );
};