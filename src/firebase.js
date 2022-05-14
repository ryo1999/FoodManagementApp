// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl5BvR-I65tpX_aFQOP6jeClINjssji54",
  authDomain: "foodmanagementapp-65b69.firebaseapp.com",
  projectId: "foodmanagementapp-65b69",
  storageBucket: "foodmanagementapp-65b69.appspot.com",
  messagingSenderId: "934349442395",
  appId: "1:934349442395:web:722fe23df093bbd5da1e7e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();