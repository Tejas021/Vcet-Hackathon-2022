// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1tjOdS5ns2cGFdz6ffSBPInWd551wTY4",
  authDomain: "vcet-hackathon.firebaseapp.com",
  projectId: "vcet-hackathon",
  storageBucket: "vcet-hackathon.appspot.com",
  messagingSenderId: "731423335135",
  appId: "1:731423335135:web:0d7bd6c0b54fc3fa6f3f6a",
  measurementId: "G-861M9SB7Q0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const register = async (data)=>{
  const reg = await addDoc(collection(db, "registrations"), {
    data:data,
});
console.log(reg)
}


export {
  register,
}