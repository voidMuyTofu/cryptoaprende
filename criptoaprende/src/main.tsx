import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ElegirNivel from "./pages/ElegirNivel";
import Tutoriales from "./pages/Tutoriales";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="tutoriales" element={<ElegirNivel />}>
        <Route
          path=":nivel"
          element={
            <Tutoriales url="http://localhost:3000/src/data/TutorialesPrincipiante.json" />
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
