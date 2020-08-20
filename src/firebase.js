import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDqL09ZyVfcvsFaviGKnw0ez2k3YRn03fY",
  authDomain: "pwa-push-notification-24166.firebaseapp.com",
  databaseURL: "https://pwa-push-notification-24166.firebaseio.com",
  projectId: "pwa-push-notification-24166",
  storageBucket: "pwa-push-notification-24166.appspot.com",
  messagingSenderId: "725486233878",
  appId: "1:725486233878:web:26de147663ab723b86c837",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
