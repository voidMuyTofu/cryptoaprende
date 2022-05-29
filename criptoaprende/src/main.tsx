import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tutoriales from "./pages/Tutoriales";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="tutoriales" element={<Tutoriales />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
