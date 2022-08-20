// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOf1RQhtMDBGMG-C25Gl2mGFZ3D_qp37A",
  authDomain: "vcet-hackathon-2022.firebaseapp.com",
  projectId: "vcet-hackathon-2022",
  storageBucket: "vcet-hackathon-2022.appspot.com",
  messagingSenderId: "667814770662",
  appId: "1:667814770662:web:07313fa022d7ae9409c827",
  measurementId: "G-9XY4DKN1DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);