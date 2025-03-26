console.log("Firebase SDK Loaded:", firebase); // ✅ Debugging Step

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5h8gEZbusQ8PN89Da-5HJpSRDNtEmgL4",
    authDomain: "cstnotes-f0e59.firebaseapp.com",
    projectId: "cstnotes-f0e59",
    storageBucket: "cstnotes-f0e59.appspot.com",
    messagingSenderId: "17433439165",
    appId: "1:17433439165:web:70213cd44c15c4ea2b40d4",
};

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
