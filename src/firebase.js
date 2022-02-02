// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp({
    apiKey: "AIzaSyB79JEAKXWCXYgpQ8AzHc5QJW8fMitrDwM",
    authDomain: "react-auth-cc626.firebaseapp.com",
    projectId: "react-auth-cc626",
    storageBucket: "react-auth-cc626.appspot.com",
    messagingSenderId: "509512222694",
    appId: "1:509512222694:web:47e8b94e4e3ed75ae9b827"
});

// Initialize Firebase
export const auth = app.auth()
export default app