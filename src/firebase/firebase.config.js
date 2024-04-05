// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDT1QdhEcZdCMITwIJ5ISzcmk2N9CFa08A",
    authDomain: "react-dragon-news-auth-c070b.firebaseapp.com",
    projectId: "react-dragon-news-auth-c070b",
    storageBucket: "react-dragon-news-auth-c070b.appspot.com",
    messagingSenderId: "313057596206",
    appId: "1:313057596206:web:fc470af721ea19a4f9a0bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;