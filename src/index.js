import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import Store from "./basic";

import App from './9-Feb/app'; 
import "./app.css";
// import Routes from './9-Feb/Routes';

ReactDOM.render(
  // <Provider store = {Store}>
    <App />,
  // </Provider>,
  document.getElementById("root")
);
