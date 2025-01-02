import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Pages/Home/Home";
function App() {
  return (
    <>
      {" "}
      <Routes>
        <Route path="/*" element={<Home />} />{" "}
      </Routes>
    </>
  );
}

export default App;
