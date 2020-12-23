import firebase from "firebase";

export const getDate = () => {
  const db = firebase.database();
  const date = db.ref("date")
  const dateDb = date.on("value", (el) => {
    return el.val();
  });
  console.log("action", dateDb);
  return {
    type: "START_DATE",
    payload: dateDb,
  };
};

