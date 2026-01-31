// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2_XIb5oH0Ibize2Co3OHLxjWg8NtybEA",
  authDomain: "netflixgpt-f7285.firebaseapp.com",
  projectId: "netflixgpt-f7285",
  storageBucket: "netflixgpt-f7285.firebasestorage.app",
  messagingSenderId: "256566374846",
  appId: "1:256566374846:web:38433836ba9b4629a789ef",
  measurementId: "G-PM8EEY524F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
