import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDNJqsutP-46LOp1QZ4XQ49RTut96zYoio",
    authDomain: "react-chat-app-ea257.firebaseapp.com",
    databaseURL: "https://react-chat-app-ea257-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-chat-app-ea257",
    storageBucket: "react-chat-app-ea257.appspot.com",
    messagingSenderId: "40504163098",
    appId: "1:40504163098:web:284a05339af28a80aa4aa3",
    measurementId: "G-M3P8V53E2V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };