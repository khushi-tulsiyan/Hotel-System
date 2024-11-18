import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
              
const firebaseConfig = {
  apiKey: "AIzaSyC9xgvm-0PFhmN0tVvEc0f3jH9wfwpYqCc",
  authDomain: "l-system-1c193.firebaseapp.com",
  projectId: "l-system-1c193",
  storageBucket: "l-system-1c193.firebasestorage.app",
  messagingSenderId: "608909798565",
  appId: "1:608909798565:web:a7975f8f37d847c891b14c",
  measurementId: "G-X1CPX4KCV3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getDatabase();
export default app;
