import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Import global styles
import 'animate.css';

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root container not found. Make sure <div id='root'></div> exists in index.html");
}
