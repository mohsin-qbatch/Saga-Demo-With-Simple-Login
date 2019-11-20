import React from "react";
import { Provider } from "react-redux";

import 'antd/dist/antd.css';
import store from "./store";
import Home from "./components/Home";

export default () =>
  <Provider store={store}>
    <Home />
  </Provider>;
