// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"

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
const app=initializeApp(firebaseConfig);
const db=getFirestore()
const auth=getAuth()

export{db,auth}