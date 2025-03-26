// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5h8gEZbusQ8PN89Da-5HJpSRDNtEmgL4",
    authDomain: "cstnotes-f0e59.firebaseapp.com",
    databaseURL: "https://cstnotes-f0e59-default-rtdb.firebaseio.com",
    projectId: "cstnotes-f0e59",
    storageBucket: "cstnotes-f0e59.firebasestorage.app",
    messagingSenderId: "17433439165",
    appId: "1:17433439165:web:70213cd44c15c4ea2b40d4",
    measurementId: "G-5FGDKSLYGY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign Up Function
function signUp() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById("status").innerText = "Signup Successful!";
        })
        .catch(error => {
            document.getElementById("status").innerText = error.message;
        });
}

// Login Function
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById("status").innerText = "Login Successful! Redirecting...";
            setTimeout(() => {
                window.location.href = "dashboard.html"; // Redirect to notes dashboard
            }, 2000);
        })
        .catch(error => {
            document.getElementById("status").innerText = error.message;
        });
}

auth.onAuthStateChanged((user) => {
    if (user) {
        window.location.href = "dashboard.html"; // Redirect logged-in users to dashboard
    }
});


// Logout Function
function logout() {
    auth.signOut().then(() => {
        document.getElementById("status").innerText = "Logged out!";
    });
}
