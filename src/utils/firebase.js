// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpPqnhDNzgwj7P_SBVTkPz-nbDYkNckg0",
  authDomain: "netflixgpt1-43e07.firebaseapp.com",
  projectId: "netflixgpt1-43e07",
  storageBucket: "netflixgpt1-43e07.appspot.com",
  messagingSenderId: "340023481823",
  appId: "1:340023481823:web:1b2bb68eb24d7e3479a06a",
  measurementId: "G-ZWJ7BFTQZE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
