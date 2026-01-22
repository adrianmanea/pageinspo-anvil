import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import BrevoApp from "./main";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter
      basename={import.meta.env.DEV ? "/src/projects/brevo/" : "/"}
    >
      <BrevoApp />
    </BrowserRouter>
  </React.StrictMode>
);
