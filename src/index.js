import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import axios from "axios";
import ContextsProvider from "./Components/Context";
axios.defaults.baseURL = "http://localhost:3001/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextsProvider>
      <App />
    </ContextsProvider>
  </React.StrictMode>
);
// package we need in project => ..
// json-server / react-router-dom / axios / context-api ..
