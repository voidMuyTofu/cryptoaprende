import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tutoriales from "./pages/ElegirNivel";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="tutoriales" element={<Tutoriales />}>
        <Route
          path=":tutorialTitulo"
          element={() => {
            return <h1>Pagina de tutorial</h1>;
          }}
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
