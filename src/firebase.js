// import firebase from "firebase/app";
// import * as firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDvVizqHe6SrfWpaN-P5BNrLie757rTBsI",
    authDomain: "netflix-a9f93.firebaseapp.com",
    projectId: "netflix-a9f93",
    storageBucket: "netflix-a9f93.appspot.com",
    messagingSenderId: "300465898878",
    appId: "1:300465898878:web:9ef41de68c0a9cc7285f2f",
    measurementId: "G-T17SB72S53"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app;