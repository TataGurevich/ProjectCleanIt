import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyC1DnNxWN-kiBy-0TQuHxCQqY30nqyqpMc",
    authDomain: "cleanit-f055b.firebaseapp.com",
    projectId: "cleanit-f055b",
    storageBucket: "cleanit-f055b.appspot.com",
    messagingSenderId: "1033510577629",
    appId: "1:1033510577629:web:d252c45587e86061d7c234",
    measurementId: "G-G7FJHNYDYG"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)