// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJrW6UjDAyRo9h-l5rz593bOX7IiMO0Ls",
    authDomain: "social-event-website.firebaseapp.com",
    projectId: "social-event-website",
    storageBucket: "social-event-website.appspot.com",
    messagingSenderId: "340079140716",
    appId: "1:340079140716:web:a836914c0efac02e335d49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth