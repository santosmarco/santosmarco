// import dotenv from "dotenv";
import firebase from "firebase";
// import admin from "firebase-admin";

// dotenv.config();

firebase.initializeApp({
  apiKey: "AIzaSyCbXCycD6a3jLpzPamTkEMtS-Dhz8glL-U",
  authDomain: "marco-santos.firebaseapp.com",
  projectId: "marco-santos",
  storageBucket: "marco-santos.appspot.com",
  messagingSenderId: "10545799253",
  appId: "1:10545799253:web:03dacf69232eabd96634dc",
  measurementId: "G-R0LPLTKXDN",
});

// admin.initializeApp({
//   credential: admin.credential.applicationDefault(),
// });

// export default admin;

export default firebase;

export const firestore = firebase.firestore();
