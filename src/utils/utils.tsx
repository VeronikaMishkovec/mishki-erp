import firebase from 'firebase';

export const sendDataToFirebase = (name: string, value: unknown) =>
  firebase.database().ref(name).push(value);
