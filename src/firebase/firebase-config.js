import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAeUvpxB7oRgABuZ_zXw6Z4EcK9A2Jg5qE",
    authDomain: "taskmanager-5b504.firebaseapp.com",
    projectId: "taskmanager-5b504",
    storageBucket: "taskmanager-5b504.appspot.com",
    messagingSenderId: "828779141918",
    appId: "1:828779141918:web:5306241ba39a968270c70f",
    measurementId: "G-1DD9WFKSEW",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
