import firebase from "firebase/app";
import "firebase/auth";
import "firebase/app";

export const auth = firebase
  .initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "unichat-16111.firebaseapp.com",
    projectId: "unichat-16111",
    storageBucket: "unichat-16111.appspot.com",
    messagingSenderId: "485149130335",
    appId: "1:485149130335:web:44b777b86e61150a49e5ea",
  })
  .auth();
