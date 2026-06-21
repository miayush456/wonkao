import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import { 
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDVNYcS1jVI0vi8cmC1piF_yP4AUAVKRok",
  authDomain: "wonkao-473b6.firebaseapp.com",
  projectId: "wonkao-473b6",
  storageBucket: "wonkao-473b6.firebasestorage.app",
  messagingSenderId: "279883734251",
  appId: "1:279883734251:web:4e97c93002ea714135f2ae",
  measurementId: "G-2V042TEN3D"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };