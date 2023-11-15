// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  // connectAuthEmulator
} from "firebase/auth";
// import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAAb4oxiDaG-zKhdKd1ufJg9OsTlTI6fVQ",
  authDomain: "reportai-facens.firebaseapp.com",
  projectId: "reportai-facens",
  storageBucket: "reportai-facens.appspot.com",
  messagingSenderId: "319238142821",
  appId: "1:319238142821:web:9f26cb75b034f3767c3f8c",
  measurementId: "G-1PZGPLYP2K",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db, analytics };
