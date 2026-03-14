import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import App from "./App";
// import Lab2 from "./pages/lab2";
import Lab3 from "./pages/lab3";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Lab3 />
    </BrowserRouter>
  </StrictMode>
);
