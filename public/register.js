// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZs1VXb5_66-CLdf5SNd5jYButjvvavs0",
  authDomain: "cst-notes-71801.firebaseapp.com",
  projectId: "cst-notes-71801",
  storageBucket: "cst-notes-71801.firebasestorage.app",
  messagingSenderId: "671538684629",
  appId: "1:671538684629:web:2cbc10e27d421975acf85c",
  measurementId: "G-GQ4JV0K0HV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const email = document.getElementById("email");
const password = document.getElementById("password");

const submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {
    event.preventDefault();
    alert(5);
})