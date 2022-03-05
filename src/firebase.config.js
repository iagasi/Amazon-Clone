// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app"
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2ISTaL8F9gIKwh97lU9XUhHCzhk4vERU",
  authDomain: "clone-e646b.firebaseapp.com",
  projectId: "clone-e646b",
  storageBucket: "clone-e646b.appspot.com",
  messagingSenderId: "580501451437",
  appId: "1:580501451437:web:40086e61ab148a8b1a8c24",
  measurementId: "G-38W9QDBBZF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export{ firebase}