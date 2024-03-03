const btnsignIn = document.getElementById("signIn");
console.log(btnsignIn);
btnsignIn.addEventListener( "click", function(){
    signIn()
   
})

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
       

const firebaseConfig = {
  apiKey: "AIzaSyDtEi9xblQ9jLmu1hiBgzQxFo4MG3Kw5oc",
  authDomain: "example-ef896.firebaseapp.com",
  projectId: "example-ef896",
  storageBucket: "example-ef896.appspot.com",
  messagingSenderId: "423848112349",
  appId: "1:423848112349:web:7166d9d2b69f8265b8eb34",
  measurementId: "G-KTYLB362X7",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const form = document.getElementById("form1")
// form.addEventListener('submit',(e) => {
//   e.preventDefault()
//   signIn()
//   signOut()
//   signUp()
// })
// console.log(form)

function signIn() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {  
      const user = userCredential.user;
      console.log('dang nhap thanh cong:'+user.email);
      alert("đăng nhập thành công")
      window.location.href = 'mainhub.html';
  })
  .catch((error) => {
      console.error('Lỗi đăng nhap', error.message);
      var errorcode = error.code;
      var errormessage = error.message;
      errormessage.textContent = errormessage;
  });
}

const btnsignUp = document.getElementById("signUp");
console.log(btnsignUp);
btnsignUp.addEventListener( "click", function(){
    signUp()
   
})

function signUp() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
  
    const auth = auth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {  
        const user = userCredential.user;
        console.log('dang kí thanh cong:'+user.email);
        alert("đăng kí thành công")
        window.location.href = 'mainhub.html';
    })
    .catch((error) => {
        console.error('Lỗi đăng nhap', error.message);
        var errorcode = error.code;
        var errormessage = error.message;
        errormessage.textContent = errormessage;
    });
  }


  function signOut() {
    auth
      .signOut()
      .then(() => {
        console.log("Signed out successfully");
        hideUserInfo();
        window.location.replace("main.html");
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  }
  
  function showUserInfo(user) {
    document.getElementById("user-email").textContent = `Welcome, ${user.email}!`;
    document.getElementById("login-form").style.display = "none";
    document.getElementById("user-info").style.display = "block";
  }
  
  function hideUserInfo() {
    document.getElementById("user-email").textContent = "";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("user-info").style.display = "none";
  }
  