import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC7lO2aPDWwt9YC4yXoY0VP-d868yhWGi4",
  authDomain: "to-do-9302b.firebaseapp.com",
  projectId: "to-do-9302b",
  storageBucket: "to-do-9302b.firebasestorage.app",
  messagingSenderId: "396028802005",
  appId: "1:396028802005:web:7724afee6c11f4c176035c",
  measurementId: "G-GHCF32HSG8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
