// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-6o2QjFcrJPymmNcV_3tARqvlk8ZezWE",
  authDomain: "pizzame-a255f.firebaseapp.com",
  projectId: "pizzame-a255f",
  storageBucket: "pizzame-a255f.appspot.com",
  messagingSenderId: "835155608310",
  appId: "1:835155608310:web:9a166da4b2d1f090dde2d7"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);   
export const db = getFirestore(app)
export const authentication = getAuth(app)