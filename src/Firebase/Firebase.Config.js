// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEdB50dQjE9TSa_4Ot5VjqKNjKlRSSuO8",
    authDomain: "creative-captures.firebaseapp.com",
    projectId: "creative-captures",
    storageBucket: "creative-captures.appspot.com",
    messagingSenderId: "608594847556",
    appId: "1:608594847556:web:e7e321a7e646ab3e979911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;