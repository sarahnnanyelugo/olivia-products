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
import { WholeSalePage } from "./Pages/WholeSalePage/WholeSalePage";
import { OurMission } from "./Pages/OurMission/OurMission";
import { Collections } from "./Pages/Collections/Collections";
import { About } from "./Pages/About/About";
import { FAQPage } from "./Pages/FAQPage/FAQPage";
import SmoothScroll from "./Components/SmoothScroll";
function App() {
  return (
    <>
      <CartProvider>
        {" "}
        {/* <SmoothScroll> */}
          {" "}
          <ScrollToTop />
          <TopNav />
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/product/:id" element={<ViewProductPage />} />{" "}
            <Route path="/contact-us" element={<ContactUs />} />{" "}
            <Route path="/order-form" element={<OrderForm />} />{" "}
            <Route path="/wholesale-page" element={<WholeSalePage />} />{" "}
            <Route path="/about-us" element={<About />} />{" "}
            <Route path="/our-mission" element={<OurMission />} />{" "}
            <Route path="/collections" element={<Collections />} />{" "}
            <Route path="/faqs" element={<FAQPage />} />{" "}
          </Routes>
          <Footer />
        {/* </SmoothScroll> */}
      </CartProvider>
    </>
  );
}

export default App;
