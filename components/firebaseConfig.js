// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* TODO: Add SDKs for Firebase products that you want to use*/
// https://firebase.google.com/docs/web/setup#available-libraries

import { GoogleAuthProvider, getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoJuCZEcq5MlvELNdFvsrO9yf7ZF_qbyU",
  authDomain: "flaggame-datt.firebaseapp.com",
  projectId: "flaggame-datt",
  storageBucket: "flaggame-datt.appspot.com",
  messagingSenderId: "684902626273",
  appId: "1:684902626273:web:1bb70517da67127b0a18a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);