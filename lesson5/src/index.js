import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { WishlistProvider } from "react-use-wishlist";
import { Provider } from "react-redux";
import { store } from "./redux/store/index";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </Provider>
  </>
);
