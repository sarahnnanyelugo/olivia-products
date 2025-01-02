// ProductsHolder.tsx
import React, { useState } from "react";
import CartOffcanvas from "../../Components/CartList/CartList";
import MainProduct from "../../Components/MainProducts/MainProducts";
import { allProductsData } from "../../TestData/allProductsData";

const ProductsHolder: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  const handleAddToCart = (item: any) => {
    const itemExists = cart.some((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      alert("This item is already in your cart!");
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
      setIsOffCanvasOpen(true);
    }
  };

  const incrementQuantity = (itemId: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (itemId: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]); // Clear the cart
  };

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.productPrice * item.quantity,
      0
    );
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Loop through your products and display them */}
        {allProductsData.map((product) => (
          <div key={product.id}>
            <MainProduct
              productName={product.name}
              productPrice={product.price}
              firstImg={product.firstImg}
              hoverImg={product.hoverImg}
              onAddToCart={() => handleAddToCart(product)}
            />
          </div>
        ))}
      </div>

      <CartOffcanvas
        show={isOffCanvasOpen}
        onHide={() => setIsOffCanvasOpen(false)}
        cart={cart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removeItem={removeItem}
        clearCart={clearCart}
        totalPrice={calculateTotalPrice()}
      />
    </div>
  );
};

export default ProductsHolder;
