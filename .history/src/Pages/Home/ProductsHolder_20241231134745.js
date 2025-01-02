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
      </div>
    </div>
  );
};
