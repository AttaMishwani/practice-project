// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDWRnURZTEoRC05crPBxYC9sMqfVzCZKdc",
    authDomain: "openandearndailycash.firebaseapp.com",
    projectId: "openandearndailycash",
    storageBucket: "openandearndailycash.appspot.com",

    messagingSenderId: "602442722633",
    appId: "1:602442722633:web:bfb41b430096c3038b7e98",
    measurementId: "G-FRBHC97JVB"
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ Initialize Firestore

export { auth, db }; // ✅ Export both
