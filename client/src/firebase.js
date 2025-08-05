// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c9e32.firebaseapp.com",
  projectId: "mern-blog-c9e32",
  storageBucket: "mern-blog-c9e32.firebasestorage.app",
  messagingSenderId: "431762815876",
  appId: "1:431762815876:web:396a27285cef1a64453bd1",
  measurementId: "G-551DH3MK2P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
