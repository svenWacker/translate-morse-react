import React from "react";
import ReactDOM from "react-dom";
import MorseModule from "./components/MorseModule";

import App from "./App";
import "./sass/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
