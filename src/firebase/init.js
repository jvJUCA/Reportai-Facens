// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAb4oxiDaG-zKhdKd1ufJg9OsTlTI6fVQ",
  authDomain: "reportai-facens.firebaseapp.com",
  projectId: "reportai-facens",
  storageBucket: "reportai-facens.appspot.com",
  messagingSenderId: "319238142821",
  appId: "1:319238142821:web:9f26cb75b034f3767c3f8c",
  measurementId: "G-1PZGPLYP2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()
export default db