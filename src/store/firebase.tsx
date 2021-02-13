import firebase from 'firebase';

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

const db = firebase.firestore();
db.collection('cities')
  .doc('LA')
  .set({
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA',
  })
  .then(() => {
    console.log('Document successfully written!');
  })
  .catch((error) => {
    console.error('Error writing document: ', error);
  });
