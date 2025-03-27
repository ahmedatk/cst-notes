// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

// ✅ Initialize Firebase (Check if already initialized)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} 
const auth = firebase.auth();

// ✅ Log Firebase Instance
console.log("Firebase Initialized:", firebase.apps.length);
document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    const googleBtn = document.getElementById("googleBtn");

    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            console.log("Login Button Clicked"); // ✅ Debugging Step
            login();
        });
    } else {
        console.error("Login Button Not Found!");
    }

    if (googleBtn) {
        googleBtn.addEventListener("click", function () {
            console.log("Google Login Button Clicked"); // ✅ Debugging Step
            loginWithGoogle();
        });
    } else {
        console.error("Google Login Button Not Found!");
    }
});
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log("Attempting login with:", email); // ✅ Debugging

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            console.log("Login Successful:", userCredential.user); // ✅ Debugging
            document.getElementById("status").innerText = "Login Successful! Redirecting...";
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 2000);
        })
        .catch(error => {
            console.error("Login Error:", error.message);
            document.getElementById("status").innerText = error.message;
        });
}

function loginWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();

    console.log("Attempting Google Login..."); // ✅ Debugging

    auth.signInWithPopup(provider)
        .then(result => {
            console.log("Google Login Success:", result.user); // ✅ Debugging
            document.getElementById("status").innerText = "Google Login Successful! Redirecting...";
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 2000);
        })
        .catch(error => {
            console.error("Google Login Error:", error.message);
            document.getElementById("status").innerText = error.message;
        });
}
