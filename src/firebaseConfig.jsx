// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3B_mOE0ExqmDaEclI0oHDpE2IyfUVNJU",
  authDomain: "react-crud-4a109.firebaseapp.com",
  databaseURL: "https://react-crud-4a109-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "react-crud-4a109",
  storageBucket: "react-crud-4a109.firebasestorage.app",
  messagingSenderId: "290426099032",
  appId: "1:290426099032:web:aeca80f80f9a682a49812d",
  measurementId: "G-VCENWHE6V5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export default app;