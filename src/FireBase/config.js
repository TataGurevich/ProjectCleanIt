import firebase from "firebase/compat/app";
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAnLBRYgvW9fQ2c28BHlWPgMzUfvzXND9U",
    authDomain: "cleanit-15f05.firebaseapp.com",
    databaseURL: "https://cleanit-15f05-default-rtdb.firebaseio.com",
    projectId: "cleanit-15f05",
    storageBucket: "cleanit-15f05.appspot.com",
    messagingSenderId: "613244323948",
    appId: "1:613244323948:web:0b6516eb433616d1ddf049",
    measurementId: "G-5E9Q7QKTXH"
};


export const fb = firebase.initializeApp(firebaseConfig);
export const storage = fb.storage();