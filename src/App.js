import React, { useEffect, useState } from "react";
import { Input, Space, Button } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import firebase from "firebase";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [nameDb, setNameDb] = useState("");
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  const createAccount = () => {
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .catch((error) => console.log(error));
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => setHasAccount(true))
      .catch((error) => console.log(error));
  };

  const db = firebase.database();
  const name = db.ref("name");

  useEffect(() => {
    name.on("value", (elem) => {
      setNameDb(elem.val());
    });
    console.log(nameDb);
  }, [db]);

  const sendData = () => {
    const db = firebase.database();
    db.ref(key).push(value);
    console.log("awesome");
  };

  return (
    <div className="wrapp">
      {hasAccount ? (
        <>
          <Input
            id="key"
            placeholder="Enter Key"
            onChange={(e) => setKey(e.target.value)}
          />
          <Input
            id="value"
            placeholder="Enter Value"
            onChange={(e) => setValue(e.target.value)}
          />
          <Button type="primary" className="btn" onClick={() => sendData()}>
            Send data
          </Button>
        </>
      ) : (
        <div className="login_form">
          <Space direction="vertical">
            <Input
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input.Password
              placeholder="Password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="primary"
              className="btn"
              onClick={() => createAccount()}
            >
              Submit
            </Button>
          </Space>
        </div>
      )}
    </div>
  );
};

export default App;
