import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { FilterProvider } from "./context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </React.StrictMode>
);
