// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCEJEPRusvpJTYdBLfNOr2vcnlgTu8eak",
  authDomain: "greenproject-bec19.firebaseapp.com",
  projectId: "greenproject-bec19",
  storageBucket: "greenproject-bec19.appspot.com",
  messagingSenderId: "836464820101",
  appId: "1:836464820101:web:74e486d736028b79f5ceec",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
