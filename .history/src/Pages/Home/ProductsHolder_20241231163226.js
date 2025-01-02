import React, { useState } from "react";
import MainProduct from "../../Components/MainProducts/MainProducts";
import { allProductsData } from "../../TestData/allProductsData";
import { Offcanvas } from "react-bootstrap";

export const ProductsHolder = ({
  cart,
  setCart,
  isOffCanvasOpen,
  setIsOffCanvasOpen,
}) => {
  const handleAddToCart = (item) => {
    const itemExists = cart.some((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      alert("This item is already in your cart!");
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
      setIsOffCanvasOpen(true); // Open offcanvas when an item is added
    }
  };

  return (
    <div>
      {/* Your product carousel or other display */}
      {allProductsData.map((product) => (
        <MainProduct
          key={product.id}
          productName={product.name}
          productPrice={product.price}
          firstImg={product.firstImg}
          hoverImg={product.hoverImg}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};
