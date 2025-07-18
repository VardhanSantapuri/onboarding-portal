// Import the functions you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAo1Wb5-J9-MXSOiqoJIkLFDESkKqigqTM",
  authDomain: "onboarding-portal-8c390.firebaseapp.com",
  projectId: "onboarding-portal-8c390",
  storageBucket: "onboarding-portal-8c390.appspot.com",
  messagingSenderId: "504223382590",
  appId: "1:504223382590:web:02b934cc2e3fb41ab8256f",
  measurementId: "G-FJC82H329S",
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore
const db = getFirestore(app);

export { db };
