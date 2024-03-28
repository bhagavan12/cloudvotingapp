import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import fs from "fs";
import csvParser from "csv-parser";

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
const auth = getAuth(app);

// Function to read CSV file and create users
function createUserFromCSV(csvFilePath) {
  fs.createReadStream(csvFilePath)
    .pipe(csvParser())
    .on("data", (row) => {
      // Create user with email and password from CSV row
      createUserWithEmailAndPassword(auth, row.email, row.password)
        .then((userCredential) => {
          console.log("User created:", userCredential.user.uid);
        })
        .catch((error) => {
          console.error("Error creating user:", error);
        });
    })
    .on("end", () => {
      console.log("CSV file processing complete.");
    });
}

// Path to your CSV file
const csvFilePath = "path/to/your/csv/file.csv";

// Call the function to create users from CSV
createUserFromCSV(csvFilePath);
