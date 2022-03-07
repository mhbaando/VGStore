import react from "react";
import reactDom from "react-dom";
import App from "./App";
import "./index.scss";
reactDom.render(
  <react.StrictMode>
    <App />
  </react.StrictMode>,
  document.getElementById("root")
);
