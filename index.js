import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./state/rootReducer";
import InitApp from "./views/react-views/";

const rootEl = document.getElementById("root");
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// hot reload using webpack dev server
if (module.hot) {
  module.hot.accept("./views/react-views", () => {
    const NextApp = require("./views/react-views").default;
    render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      rootEl
    );
  });
} else {
  render(
    <Provider store={store}>
      <InitApp />
    </Provider>,
    rootEl
  );
}
