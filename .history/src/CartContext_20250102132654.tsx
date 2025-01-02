import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  id: number;
  productName: string;
  productPrice: number;
  firstImg: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  isOffCanvasOpen: boolean;
  setIsOffCanvasOpen: (open: boolean) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  const addToCart = (item: CartItem) => {
    const itemExists = cart.some((cartItem) => cartItem.id === item.id);
    if (!itemExists) {
      setCart((prev) => [...prev, { ...item, quantity: 1 }]);
      setIsOffCanvasOpen(true);
    } else {
      alert("This item is already in your cart!");
    }
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const incrementQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isOffCanvasOpen,
        setIsOffCanvasOpen,
        addToCart,
        removeFromCart,
        clearCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
