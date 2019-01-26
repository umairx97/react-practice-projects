import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Store from "./basic";

import App from "./app";
import "./app.css";

ReactDOM.render(
  <Provider store = {Store}>
    {" "}
    <App />{" "}
  </Provider>,
  document.getElementById("root")
);
