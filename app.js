// Firebase config (adiga ayaa beddelaya)
const firebaseConfig = {
  apiKey: "818682789455-ntb6v8q1i9t6d99hvtpvjb60d2kv2hgg.apps.googleusercontent.com",
  authDomain: ".firebaseapp.com",
  projectId:sonic-column-498615-j5 "",
  storageBucket: "818682789455.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

// Init
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// REGISTER
function register(){
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
  .then(user => {
    db.collection("users").doc(user.user.uid).set({
      email: email,
      role: "user"
    });

    document.getElementById("msg").innerText = "Registered!";
  })
  .catch(err => alert(err.message));
}

// LOGIN
function login(){
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
  .then(user => {
    document.getElementById("msg").innerText = "Login success!";
    window.location.href = "dashboard.html";
  })
  .catch(err => alert(err.message));
}