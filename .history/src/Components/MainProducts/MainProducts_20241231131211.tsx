import React, { useState } from "react";
import MainProduct from "./MainProduct";

const ParentComponent = () => {
  const [cart, setCart] = useState<any[]>([]);

  const handleAddToCart = (item: ProductProps) => {
    // Add item to the cart if it's not already there
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleRemoveItem = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const handleRemoveAll = () => {
    setCart([]);
  };

  return (
    <div>
      <MainProduct
        id={1}
        firstImg="image1.jpg"
        hoverImg="image2.jpg"
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveItem={handleRemoveItem}
        onRemoveAll={handleRemoveAll}
      />
    </div>
  );
};

export default ParentComponent;
