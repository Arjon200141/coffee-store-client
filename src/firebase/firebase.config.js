// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRJBceF4MDLUaiN34y8Dj4GOOxSWK9yeU",
  authDomain: "coffee-store-8c95f.firebaseapp.com",
  projectId: "coffee-store-8c95f",
  storageBucket: "coffee-store-8c95f.appspot.com",
  messagingSenderId: "77085214143",
  appId: "1:77085214143:web:f0be190c14c9600fb88d0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;