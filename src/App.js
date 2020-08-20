import React from "react";
import "./App.css";
import firebase from "./firebase";

function App() {
  const messaging = firebase.messaging();

  messaging
    .requestPermission()
    .then(() => {
      return messaging.getToken();
    })
    .then((result) => console.log("Token: ", result));
  return (
    <div className="App">
      <h1>PWA Push Notification</h1>
    </div>
  );
}

export default App;
