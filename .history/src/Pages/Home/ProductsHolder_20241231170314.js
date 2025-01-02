import React, { useEffect, useState } from "react";
import MainProduct from "../../Components/MainProducts/MainProducts";
import { allProductsData } from "../../TestData/allProductsData";
import { Offcanvas } from "react-bootstrap";

export const ProductsHolder = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const visibleItems = 4;

  // Extend products array for seamless looping
  const extendedProducts = [
    ...allProductsData.slice(-visibleItems),
    ...allProductsData,
    ...allProductsData.slice(0, visibleItems),
  ];

  // Adjust the actual index to match the extended array
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

  // Handle looping effect after the transition ends
  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        // Complete the transition smoothly before changing the startIndex
        setIsTransitioning(false);

        // Handle the case when startIndex goes out of bounds (looping)
        if (startIndex === -1) {
          setStartIndex(allProductsData.length - 1);
        } else if (startIndex === allProductsData.length) {
          setStartIndex(0);
        }
      }, 1000); // Match the transition duration (1s)
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning, startIndex, allProductsData.length]);

  const [cart, setCart] = useState([]);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  const handleAddToCart = (item) => {
    // Check if the item is already in the cart
    const itemExists = cart.some((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      alert("This item is already in your cart!");
    } else {
      // Add item to the cart with quantity 1
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
      setIsOffCanvasOpen(true);
    }
  };

  const handleRemoveFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]); // Clear the cart
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

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return <></>;
};
