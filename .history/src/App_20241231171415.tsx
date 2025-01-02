import React from "react";

import "./App.scss";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Pages/Home/Home";
import ScrollToTop from "./scrollToTop";
import { TopNav } from "./Components/TopNav/TopNav";
import { ViewProductPage } from "./Pages/ViewProductPage/ViewProductPage";
function App() {
  return (
    <>
      <ScrollToTop />
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/product/:id" element={<ViewProductPage />} />{" "}
      </Routes>
    </>
  );
}

export default App;
