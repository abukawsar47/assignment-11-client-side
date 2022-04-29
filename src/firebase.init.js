// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2CyzyYyFK6oJCie7bXWUNmh7BATi4hmw",
    authDomain: "assignment-11-client-side.firebaseapp.com",
    projectId: "assignment-11-client-side",
    storageBucket: "assignment-11-client-side.appspot.com",
    messagingSenderId: "11620263185",
    appId: "1:11620263185:web:04d03d416ddfe70a3658b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;