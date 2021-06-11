// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZmDfT6o1ABRXAXVa7fdCeIbo_41JnAgs",
  authDomain: "version2-6ca97.firebaseapp.com",
  projectId: "version2-6ca97",
  storageBucket: "version2-6ca97.appspot.com",
  messagingSenderId: "354978167760",
  appId: "1:354978167760:web:e2d47b9ad787b40f0a97d5",
  measurementId: "G-LZCY6ZER4S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth(); 

export { db, auth };

