// ✅ Correct Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5h8gEZbusQ8PN89Da-5HJpSRDNtEmgL4",
    authDomain: "cstnotes-f0e59.firebaseapp.com",
    projectId: "cstnotes-f0e59",
    storageBucket: "cstnotes-f0e59.appspot.com", // ✅ FIXED storage bucket
    messagingSenderId: "17433439165",
    appId: "1:17433439165:web:70213cd44c15c4ea2b40d4",
};

// ✅ Initialize Firebase (Only Once)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} 

// ✅ Initialize Firebase Authentication
const auth = firebase.auth();

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginBtn").addEventListener("click", login);
    document.getElementById("googleBtn").addEventListener("click", loginWithGoogle);
});

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
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

    auth.signInWithPopup(provider)
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
