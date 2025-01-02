import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap"; // Assuming you're using Bootstrap's Offcanvas component
import MainProduct from "./MainProduct"; // Import the MainProduct component
import { allProductsData } from "../data/products"; // Import your product data

const ProductsHolder: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  // Add item to cart
  const handleAddToCart = (item: any) => {
    setCart((prevCart) => [...prevCart, item]);
    setIsOffCanvasOpen(true); // Open offcanvas when an item is added
  };

  // Remove all items from the cart
  const handleRemoveAllFromCart = () => {
    setCart([]); // Clear the entire cart
  };

  return (
    <div>
      <div className="product-list">
        {allProductsData.map((product) => (
          <MainProduct
            key={product.id}
            id={product.id}
            firstImg={product.firstImg}
            hoverImg={product.hoverImg}
            productPrice={product.price}
            productName={product.name}
            onAddToCart={handleAddToCart}
          />
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
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.firstImg} alt={`Item ${item.id}`} width="100" />
                <div>
                  <p>{item.productName}</p>
                  <p>${item.productPrice.toFixed(2)}</p>
                </div>
              </div>
            ))
          )}

          {/* Button to remove all items from the cart, shown only if more than one item in the cart */}
          {cart.length > 1 && (
            <button
              className="remove-all-btn"
              onClick={handleRemoveAllFromCart}
              style={{
                marginTop: "10px",
                backgroundColor: "red",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Remove All
            </button>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default ProductsHolder;
