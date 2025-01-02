import React, { useState } from "react";
import MainProduct from "../../Components/MainProducts/MainProducts";
import { allProductsData } from "../../TestData/allProductsData";
import { Offcanvas } from "react-bootstrap";

interface ProductsHolderProps {
  isOffCanvasOpen: boolean;
  setIsOffCanvasOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductsHolder: React.FC<ProductsHolderProps> = ({
  isOffCanvasOpen,
  setIsOffCanvasOpen,
}) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setIsOffCanvasOpen(true); // Open the offcanvas when item is added
  };

  const handleRemoveFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <div>
        {/* Carousel and product display goes here */}
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
                  <p>${item.productPrice}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    marginLeft: "1rem",
                  }}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
