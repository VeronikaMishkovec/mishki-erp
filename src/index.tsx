import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
// import { createStore, compose, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';

import { App } from './App';

const firebaseConfig = {
  apiKey: 'AIzaSyBCXboxTNlLFD9Y_66v1t7FsODDM2qs-QY',
  appId: '1:344418684938:web:43ba9036ff6f5ea4ef8ff3',
  authDomain: 'mishkierp-cd923.firebaseapp.com',
  messagingSenderId: '344418684938',
  projectId: 'mishkierp-cd923',
  storageBucket: 'mishkierp-cd923.appspot.com',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.collection('cities')
  .doc('LA')
  .set({
    country: 'uk',
    name: 'Los Angeles',
    state: 'CA',
  })
  .then(() => {
    console.log('Document successfully written!');
  })
  .catch((error) => {
    console.error('Error writing document: ', error);
  });
// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }
// // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(applyMiddleware(thunk));

ReactDOM.render(
  // <Provider store={store}>
  <App />,
  // </Provider>
  document.getElementById('root'),
);
