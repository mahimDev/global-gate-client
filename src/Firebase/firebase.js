// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg0lvOiK3kEzFDNR9xQxS48EOp31J6Vks",
  authDomain: "global-gate-b17fa.firebaseapp.com",
  projectId: "global-gate-b17fa",
  storageBucket: "global-gate-b17fa.firebasestorage.app",
  messagingSenderId: "107574126307",
  appId: "1:107574126307:web:d99a1371abcafaaf1bc7d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
