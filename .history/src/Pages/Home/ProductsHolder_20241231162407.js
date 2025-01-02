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

  // Function to open the offcanvas from the topnav

  return (
    <div>
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
              productName={product.name}
              productPrice={product.price}
              firstImg={product.firstImg}
              hoverImg={product.hoverImg}
              key={product.id}
              id={product.id}
              onAddToCart={handleAddToCart}
            />
          </div>
        ))}
      </div>

      {/* Offcanvas to show cart */}
      <Offcanvas
        show={isOffCanvasOpen}
        onHide={() => setIsOffCanvasOpen(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} style={{ marginBottom: "1rem" }}>
                <img
                  src={item.firstImg}
                  alt={`Product ${item.id}`}
                  style={{ width: "50px", marginRight: "1rem" }}
                />
                <div>
                  <p>{item.productName}</p>
                  <p>${(item.productPrice * item.quantity).toFixed(2)}</p>
                  <div>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      style={{ marginRight: "5px" }}
                    >
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      style={{ marginLeft: "5px" }}
                    >
                      -
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  style={{
                    marginLeft: "1rem",
                    backgroundColor: "red",
                    color: "white",
                  }}
                >
                  Remove
                </button>
              </div>
            ))
          )}

          {/* Button to remove all items from the cart, shown only if more than one item in the cart */}
          {cart.length > 1 && (
            <button
              className="clear-all-btn"
              onClick={handleClearCart}
              style={{
                marginTop: "10px",
                backgroundColor: "#f44336",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                width: "100%",
              }}
            >
              Clear All
            </button>
          )}
          {/* Display total price */}
          <div style={{ marginTop: "20px" }}>
            <strong>Total: ${calculateTotalPrice().toFixed(2)}</strong>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
