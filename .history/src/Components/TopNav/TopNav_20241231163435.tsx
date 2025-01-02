import React, { useEffect, useState } from "react";
import { Lower } from "./Lower";
import { Middle } from "./Middle";
import { Upper } from "./Upper";
import "./top-nav.scss";
import { ProductsHolder } from "../../Pages/Home/ProductsHolder";

// Define types for state and props
interface CartItem {
  id: string;
  productName: string;
  firstImg: string;
  productPrice: number;
  quantity: number;
}

export const TopNav: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Lifted state for cart and offcanvas visibility
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  // Handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="top-nav sticky">
      <div className={`upper ${scrollPosition > 50 ? "hide" : ""}`}>
        <Upper />
      </div>
      <div className="middle ">
        <Middle
          cart={cart} // Pass cart data to Middle component
          openCart={() => setIsOffCanvasOpen(true)} // Function to open offcanvas
        />
      </div>
      <div className={`lower ${scrollPosition > 50 ? "hide" : ""}`}>
        <Lower />
      </div>

      {/* Pass cart and setIsOffCanvasOpen to ProductsHolder */}
      <ProductsHolder
        cart={cart}
        setCart={setCart}
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
    </div>
  );
};
