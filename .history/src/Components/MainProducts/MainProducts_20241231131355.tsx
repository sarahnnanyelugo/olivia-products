import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap"; // Assuming you're using Bootstrap's Offcanvas component

// Define the ProductProps interface with necessary functions
export interface ProductProps {
  id: number;
  firstImg: string;
  hoverImg: string;
  cart: any[]; // Cart state
  onAddToCart: (item: ProductProps) => void; // Function to add item to cart
  onRemoveItem: (itemId: number) => void; // Function to remove item
  onRemoveAll: () => void; // Function to remove all items
}

const MainProduct: React.FC<ProductProps> = ({
  id,
  firstImg,
  hoverImg,
  cart,
  onAddToCart,
  onRemoveItem,
  onRemoveAll,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  const handleAddToCart = () => {
    const item: ProductProps = {
      id,
      firstImg,
      hoverImg,
      cart, // Passing the current cart
      onAddToCart, // Function to add the item to cart
      onRemoveItem, // Function to remove the item from cart
      onRemoveAll, // Function to remove all items from cart
    };
    onAddToCart(item); // Add the item to the cart
    setIsOffCanvasOpen(true); // Open the offcanvas when item is added
  };

  return (
    <>
      <div
        className="col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: "relative",
          display: "inline-block",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "100%",
            overflow: "hidden",
          }}
        >
          <img
            className="product-img"
            src={firstImg}
            alt="Product"
            style={{
              opacity: isHovered ? 0 : 1, // Hide when hovered
            }}
          />
          <img
            className="product-img"
            src={hoverImg}
            alt="Product Hover"
            style={{
              opacity: isHovered ? 1 : 0, // Show when hovered
            }}
          />
        </div>

        {isHovered && (
          <button
            className="add-to-cart-btn"
            style={{
              opacity: isHovered ? 1 : 0,
            }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        )}
      </div>

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
              <div key={item.id} className="cart-item">
                <img src={item.firstImg} alt={`Item ${item.id}`} width="100" />
                <p>Item {item.id}</p>
                <button onClick={() => onRemoveItem(item.id)}>Remove</button>
              </div>
            ))
          )}
          <button
            className="remove-all-btn"
            onClick={onRemoveAll}
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MainProduct;
