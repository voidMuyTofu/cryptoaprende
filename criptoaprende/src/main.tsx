import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ElegirNivel from "./pages/ElegirNivel";
import Tutoriales from "./pages/Tutoriales";
import Page404 from "./pages/Page404";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="tutoriales" element={<ElegirNivel />}></Route>
      <Route
        path="tutoriales/principiante"
        element={
          <Tutoriales
            url="http://localhost:3000/src/data/LoMasPopular.json"
            nivel="principiante"
          />
        }
      ></Route>
      <Route
        path="tutoriales/intermedio"
        element={
          <Tutoriales
            url="http://localhost:3000/src/data/LoMasPopular.json"
            nivel="intermedio"
          />
        }
      ></Route>
      <Route
        path="tutoriales/avanzado"
        element={
          <Tutoriales
            url="http://localhost:3000/src/data/LoMasPopular.json"
            nivel="avanzado"
          />
        }
      ></Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
