// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5h8gEZbusQ8PN89Da-5HJpSRDNtEmgL4",
    authDomain: "cstnotes-f0e59.firebaseapp.com",
    projectId: "cstnotes-f0e59",
    storageBucket: "cstnotes-f0e59.firebasestorage.app",
    messagingSenderId: "17433439165",
    appId: "1:17433439165:web:70213cd44c15c4ea2b40d4",
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // If already initialized, use that instance
}

// Check if Firebase is loaded
console.log("Firebase Loaded:", firebase);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginBtn").addEventListener("click", login);
    document.getElementById("googleBtn").addEventListener("click", loginWithGoogle);
});

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById("status").innerText = "Login Successful! Redirecting...";
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 2000);
        })
        .catch(error => {
            document.getElementById("status").innerText = error.message;
        });
}

function loginWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(() => {
            document.getElementById("status").innerText = "Google Login Successful! Redirecting...";
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 2000);
        })
        .catch(error => {
            document.getElementById("status").innerText = error.message;
        });
}
