import React, { useEffect, useState } from "react";
import CartOffcanvas from "../../Components/CartList/CartList";
import MainProduct from "../../Components/MainProducts/MainProducts";
import { allProductsData } from "../../TestData/allProductsData";
import { useCart } from "../../CartContext";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

export const ProductsHolder = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const visibleItems = 4;

  // Extend products for infinite scroll effect
  const extendedProducts = [
    ...allProductsData.slice(-visibleItems),
    ...allProductsData,
    ...allProductsData.slice(0, visibleItems),
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
          setStartIndex(allProductsData.length - 1);
        } else if (startIndex === allProductsData.length) {
          setStartIndex(0);
        }
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning, startIndex]);

  const {
    cart,
    setIsOffCanvasOpen,
    addToCart,
    handleRemoveFromCart,
    handleClearCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  return (
    <div className="prod-slide">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <MdNavigateBefore onClick={handlePrev} />

        <MdNavigateNext onClick={handleNext} />
      </div>

      <div
        className="carousel col-md-11"
        style={{
          display: "flex",
          transition: isTransitioning ? "transform 1s ease-in-out" : "none",
          transform: `translateX(-${(100 / visibleItems) * actualStartIndex}%)`,
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
  );
};
