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

// Sign-Up Function
function signUp() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    
    if (password !== confirmPassword) {
        document.getElementById("status").innerText = "Passwords do not match!";
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById("status").innerText = "Signup Successful! Redirecting...";
            setTimeout(() => {
                window.location.href = "index.html"; // Redirect to login page
            }, 2000);
        })
        .catch(error => {
            document.getElementById("status").innerText = error.message;
        });
}
