import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// package we need in project => ..
// json-server / react-router-dom / axios / context-api ..
