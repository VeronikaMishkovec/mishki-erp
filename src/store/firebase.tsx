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

// const db = firebase.firestore();

// export const getPrjList = () => {
//   const arr: any[] = [];
//   // return db
//   db.collection('users')
//     .add({
//       born: 1912,
//       first: 'Alan',
//       last: 'Turing',
//       middle: 'Mathison',
//     })
//     .then(function (docRef) {
//       console.log('Document written with ID: ', docRef.id);
//     })
//     .catch(function (error) {
//       console.error('Error adding document: ', error);
//     });
//   return db;
//   // db.collection('users')
//   //   .get()
//   //   .then((querySnapshot) => {
//   //     querySnapshot.forEach((doc) => {
//   //       arr.push(doc.data());
//   //       // console.log(doc.data());
//   //     });
//   //   });

//   // // arr.push(temp);
//   // return arr;
// };

// export const getPrjList = async () => {
//   const arr: any[] = [];
//   const res = await firebase.firestore().collection('users').get();
//   res.forEach((doc: any) => {
//     // console.log(doc.data());
//     arr.push(doc.data());
//     // return doc.data();
//   });
//   return arr;
// };

// export default getPrjList;
