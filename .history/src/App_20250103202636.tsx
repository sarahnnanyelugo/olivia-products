import React from "react";

import "./App.scss";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Pages/Home/Home";
import ScrollToTop from "./scrollToTop";
import { TopNav } from "./Components/TopNav/TopNav";
import { ViewProductPage } from "./Pages/ViewProductPage/ViewProductPage";
import { CartProvider } from "./CartContext";
import { Footer } from "./Components/Footer/Footer";
import { ContactUs } from "./Pages/ContactUs/ContactUs";
import { OrderForm } from "./Pages/ContactUs/OrderForm";
function App() {
  return (
    <>
      <CartProvider>
        {" "}
        <ScrollToTop />
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/product/:id" element={<ViewProductPage />} />{" "}
          <Route path="/contact-us" element={<ContactUs />} />{" "}
          <Route path="/order-form" element={<OrderForm />} />{" "}
          <Route path="/wholesale-page" element={<OrderForm />} />{" "}
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
