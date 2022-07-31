import firebase from "firebase";
import 'firebase/firestore';   // for cloud firestore

const firebaseConfig = {
  apiKey: "AIzaSyCzwQtKRY9tYJpYgvNDTyUQ2LHtLpsmIZA",
  authDomain: "curso-utn-90696.firebaseapp.com",
  databaseURL: "https://curso-utn-90696-default-rtdb.firebaseio.com",
  projectId: "curso-utn-90696",
  storageBucket: "curso-utn-90696.appspot.com",
  messagingSenderId: "292157745733",
  appId: "1:292157745733:web:a23963c6c9f9ee4924912c",
  measurementId: "G-HZV4WP3F0T"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
firebase.auth = firebase.auth();
firebase.db = db;

export default firebase;



