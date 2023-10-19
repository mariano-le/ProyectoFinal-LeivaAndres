// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIgQq9xCDFUnUqxxGUJtsVAh5hYh4x_R0",
  authDomain: "proyectofinal-leivaandres.firebaseapp.com",
  projectId: "proyectofinal-leivaandres",
  storageBucket: "proyectofinal-leivaandres.appspot.com",
  messagingSenderId: "951852314967",
  appId: "1:951852314967:web:ea5f6be21e15bcac34ce12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);