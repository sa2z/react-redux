import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
// import "./exercise";

// combine
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules";

const store = createStore(rootReducer);
// console.log(store.getState());
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
