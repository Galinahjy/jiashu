import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { GlobalStyled } from "./style.js";
import { GlobalIconfont } from "./statics/iconfont/iconfont";
import App from "./App";

ReactDOM.render(
  <Fragment>
    <GlobalStyled />
    <GlobalIconfont />
    <App />
  </Fragment>,
  document.getElementById("root")
);
