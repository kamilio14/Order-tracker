import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Importing the main App component
import "./index.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Attaching React to the root div
);
