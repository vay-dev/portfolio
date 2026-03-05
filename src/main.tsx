import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>,
);
