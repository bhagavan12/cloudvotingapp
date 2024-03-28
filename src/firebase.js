// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDAmqxntkvOMIxFdRJ6CXBljYseuFBII8g",
  authDomain: "tejgram-173017.firebaseapp.com",
  projectId: "tejgram-173017",
  storageBucket: "tejgram-173017.appspot.com",
  messagingSenderId: "845707096271",
  appId: "1:845707096271:web:e635d2c8276a63acc987ba",
  measurementId: "G-8TX8JXBTHW"
};
 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;