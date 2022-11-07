// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc3IEs3HBT6GwgwFYoK4-P9nZA8s4vS-E",
  authDomain: "wildlife-grapher.firebaseapp.com",
  projectId: "wildlife-grapher",
  storageBucket: "wildlife-grapher.appspot.com",
  messagingSenderId: "395748916133",
  appId: "1:395748916133:web:f6cb54a6e85718cea1464c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app