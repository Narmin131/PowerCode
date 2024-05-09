import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { WishlistProvider } from "react-use-wishlist";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <WishlistProvider>
    <App />
  </WishlistProvider>
  // </React.StrictMode>
);
