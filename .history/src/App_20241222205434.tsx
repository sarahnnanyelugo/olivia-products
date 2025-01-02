import React from "react";

import "./App.scss";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Pages/Home/Home";
import ScrollToTop from "./scrollToTop";
import { TopNav } from "./Components/TopNav/TopNav";
function App() {
  return (
    <>
      <ScrollToTop />
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
      </Routes>
    </>
  );
}

export default App;
