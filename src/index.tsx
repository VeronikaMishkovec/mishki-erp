import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import { App } from './App';
import { rootReducer } from './store/reducer/rootReducer';

const firebaseConfig = {
  apiKey: 'AIzaSyAnAaMjcN_CEYj4WqVKLz3nZP1pnTud8Zg',
  appId: '1:1062519280923:web:2b698c9bf742847fe2afbe',
  authDomain: 'mishki-erp-29a42.firebaseapp.com',
  databaseURL: 'https://mishki-erp-29a42-default-rtdb.firebaseio.com',
  messagingSenderId: '1062519280923',
  projectId: 'mishki-erp-29a42',
  storageBucket: 'mishki-erp-29a42.appspot.com',
};

firebase.initializeApp(firebaseConfig);
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
