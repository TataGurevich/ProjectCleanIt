import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./fireBase-config";

export function regist (email,pass) {
    createUserWithEmailAndPassword(auth, email, pass)
        .then(response => console.log('Your registration confirm'))
        .catch(e => console.log('error'))

}
export function loginInWeb (email,pass){
    signInWithEmailAndPassword(auth,email,pass)
        .then(responce => console.log('You login'))
        .catch(e => console.log('Error'))
}