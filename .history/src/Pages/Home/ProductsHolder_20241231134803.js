import React from "react";

export const ProductsHolder = () => {
  return (
    <div>
      <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button className="btn btn-secondary" onClick={handlePrev}>
            Prev
          </button>
          <button className="btn btn-secondary" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>{" "}
      <div
        className="carousel"
        style={{
          display: "flex",
          transition: isTransitioning ? "transform 1s ease-in-out" : "none", // Slower transition
          transform: `translateX(-${(100 / visibleItems) * actualStartIndex}%)`,
          width: `${(extendedProducts.length / visibleItems) * 25}%`, // 4 items in a row
        }}
      >
        {extendedProducts.map((product, index) => (
          <div
            key={index}
            style={{
              flex: `0 0 ${100 / visibleItems}%`,
              boxSizing: "border-box",
              padding: "10px", // Add space between items
            }}
          >
            <MainProduct
              firstImg={product.firstImg}
              hoverImg={product.hoverImg}
              id={1}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
