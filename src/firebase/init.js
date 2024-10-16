// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv5EIadFdLbq8ZMKgTxi7TYNl1uHvxNHY",
  authDomain: "week7-yutong-wu.firebaseapp.com",
  projectId: "week7-yutong-wu",
  storageBucket: "week7-yutong-wu.appspot.com",
  messagingSenderId: "873528233727",
  appId: "1:873528233727:web:3d8f18ddc9d3068f3e46ca"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db=getFirestore()
export default db