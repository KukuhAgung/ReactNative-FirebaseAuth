import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDEAjexe5FM1EZmrNdwxTHVR-HXTon_zhE",
  authDomain: "authproject-c6b53.firebaseapp.com",
  projectId: "authproject-c6b53",
  storageBucket: "authproject-c6b53.appspot.com",
  messagingSenderId: "550265977313",
  appId: "1:550265977313:web:cf775edcb70996c705faa0",
  measurementId: "G-6ZGS426SFC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
