// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from "firebase/database";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  production: true ,
  apiKey: "AIzaSyC0xhY2WiO3OpUaP0361W6grFWZRjMsEik",
  authDomain: "art-94df7.firebaseapp.com",
  projectId: "art-94df7",
  storageBucket: "art-94df7.appspot.com",
  messagingSenderId: "102691278088",
  appId: "1:102691278088:web:d11d3dd63cc412f2b270bd",
  measurementId: "G-11JQTQZVWH",
  databaseURL: "https://art-94df7-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
export { firebaseAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth };
