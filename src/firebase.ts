// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaNAleStcu3ZQRHU-DCUvhQLUphWqHGP0",
  authDomain: "thebanana-d9286.firebaseapp.com",
  databaseURL: "https://thebanana-d9286.firebaseio.com",
  projectId: "thebanana-d9286",
  storageBucket: "thebanana-d9286.appspot.com",
  messagingSenderId: "652607083295",
  appId: "1:652607083295:web:674295e96eda73b9a9d62a",
  measurementId: "G-8YQ6TBDZW3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
