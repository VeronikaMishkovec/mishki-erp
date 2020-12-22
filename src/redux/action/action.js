import firebase from 'firebase'

export const getDate = () => {
  const db = firebase.database()
  const date = db.ref("date");
  console.log('action', date)
  return {
    type: "START_DATE",
    payload: date,
  };
};
