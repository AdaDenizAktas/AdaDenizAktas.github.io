// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBEaY16YTuPcSscp0J2PKiXD6p6xjj7rE",
  authDomain: "mysite-6d48f.firebaseapp.com",
  projectId: "mysite-6d48f",
  storageBucket: "mysite-6d48f.firebasestorage.app",
  messagingSenderId: "981490289313",
  appId: "1:981490289313:web:55a3a9c19e9499ff713ee0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
