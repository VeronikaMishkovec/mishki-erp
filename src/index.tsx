import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

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

// const db = firebase.firestore();

// db.collection('users').add({
//   born: 1815,
//   first: 'Ada',
//   last: 'Lovelace',
// });
// .then(function (docRef) {
//   console.log('Document written with ID: ', docRef.id);
// })
// .catch(function (error) {
//   console.error('Error adding document: ', error);
// });
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, compose(composeEnhancers(), applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
