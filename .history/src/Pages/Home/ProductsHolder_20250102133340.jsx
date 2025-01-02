import React, { useEffect, useState } from "react";
import CartOffcanvas from "../../Components/CartList/CartList";
import MainProduct from "../../Components/MainProducts/MainProducts";
import { allProductsData } from "../../TestData/allProductsData";

export const ProductsHolder = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const visibleItems = 4;

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
  }, [isTransitioning, startIndex, allProductsData.length]);

  const [cart, setCart] = useState([]);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  const handleAddToCart = (item) => {
    const itemExists = cart.some((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      alert("This item is already in your cart!");
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
      setIsOffCanvasOpen(true);
    }
  };

  const handleRemoveFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const incrementQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="prod-slide">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button className="btn btn-secondary" onClick={handlePrev}>
          Prev
        </button>
        <button className="btn btn-secondary" onClick={handleNext}>
          Next
        </button>
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
              key={product.id}
              id={product.id}
              onAddToCart={addToCart}
            />
          </div>
        ))}
      </div>

      {/* Render the CartOffcanvas component */}
      <CartOffcanvas
        show={isOffCanvasOpen}
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
