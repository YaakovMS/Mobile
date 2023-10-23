// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA4JdPTY21NKnWkzEpcIcl-dgO5wr4_mA",
  authDomain: "mobile-a0b82.firebaseapp.com",
  projectId: "mobile-a0b82",
  storageBucket: "mobile-a0b82.appspot.com",
  messagingSenderId: "290051192512",
  appId: "1:290051192512:web:b169de5afe7e85905b9f25",
  measurementId: "G-NNKB7J180G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)  