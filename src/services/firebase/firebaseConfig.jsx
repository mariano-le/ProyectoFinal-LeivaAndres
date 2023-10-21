import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBIgQq9xCDFUnUqxxGUJtsVAh5hYh4x_R0",
  authDomain: "proyectofinal-leivaandres.firebaseapp.com",
  projectId: "proyectofinal-leivaandres",
  storageBucket: "proyectofinal-leivaandres.appspot.com",
  messagingSenderId: "951852314967",
  appId: "1:951852314967:web:ea5f6be21e15bcac34ce12"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);