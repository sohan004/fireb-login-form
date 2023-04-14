// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXAHoCuJ9k8aKlN_-s0gB5f32OUX5SfYg",
    authDomain: "email-pass-32ae5.firebaseapp.com",
    projectId: "email-pass-32ae5",
    storageBucket: "email-pass-32ae5.appspot.com",
    messagingSenderId: "394878059341",
    appId: "1:394878059341:web:6ad64a777dbebdc041ed04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app }