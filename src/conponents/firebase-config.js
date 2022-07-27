// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2IFyGXaejPBkgsawmJ07S60uadxe7X1g",
  authDomain: "contacts-app-59b69.firebaseapp.com",
  projectId: "contacts-app-59b69",
  storageBucket: "contacts-app-59b69.appspot.com",
  messagingSenderId: "389185729536",
  appId: "1:389185729536:web:7ab2752bc42b13bf4b14e5",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Initialize Firebase
export { db };
