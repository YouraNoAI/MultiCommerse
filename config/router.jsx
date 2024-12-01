// import module
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../css/style.css";


// import Page
import Index from "../Pages/index";
import Blanks from "../Pages/blank";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/*" element={<Blanks />} />
      </Routes>
    </Router>
  </StrictMode>
);
