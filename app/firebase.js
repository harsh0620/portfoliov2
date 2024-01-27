// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBaqnb3XJkB0aR2VAbfr4RYazauVhjQmJc",
//   authDomain: "portfoliov2-8d7a9.firebaseapp.com",
//   projectId: "portfoliov2-8d7a9",
//   storageBucket: "portfoliov2-8d7a9.appspot.com",
//   messagingSenderId: "642900908421",
//   appId: "1:642900908421:web:b02a9402366ffbe0198cec",
//   measurementId: "G-3CQXXQVFCB"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export default app;
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase with options
firebase.initializeApp(firebaseConfig);
export const dataref = firebase.database();
export const firestore = firebase.firestore(); // Add this line
export default firebase;