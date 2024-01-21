import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAPvl6CLDp12tTMWB2K7SVikkFTmELB4M4",
  authDomain: "vendors-app-45d27.firebaseapp.com",
  projectId: "vendors-app-45d27",
  storageBucket: "vendors-app-45d27.appspot.com",
  messagingSenderId: "197442242431",
  appId: "1:197442242431:web:9c652870e8a151777c7c4a",
  measurementId: "G-KDJW446P1L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;
