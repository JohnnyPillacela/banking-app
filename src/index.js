import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import { legacy_createStore as createStore} from 'redux'
import thunk from "redux-thunk";

import reducer from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={createStore(reducer, applyMiddleware(thunk) )}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
