import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";

const firebaseConfig = {
  apiKey: "AIzaSyAnAaMjcN_CEYj4WqVKLz3nZP1pnTud8Zg",
  authDomain: "mishki-erp-29a42.firebaseapp.com",
  databaseURL: "https://mishki-erp-29a42-default-rtdb.firebaseio.com",
  projectId: "mishki-erp-29a42",
  storageBucket: "mishki-erp-29a42.appspot.com",
  messagingSenderId: "1062519280923",
  appId: "1:1062519280923:web:2b698c9bf742847fe2afbe",
};

firebase.initializeApp(firebaseConfig);

const store = createStore(
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
