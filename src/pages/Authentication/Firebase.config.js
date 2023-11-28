// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXd9il-ZjDo_TL_fG2jG7etxR167GUzmk",
  authDomain: "bookscollectionmeettechlab.firebaseapp.com",
  projectId: "bookscollectionmeettechlab",
  storageBucket: "bookscollectionmeettechlab.appspot.com",
  messagingSenderId: "28758464180",
  appId: "1:28758464180:web:22eca4620e071f4c9ce9e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;