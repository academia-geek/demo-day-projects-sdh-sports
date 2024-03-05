// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAa6UHVh_A7C-LN2Q4heHXnnx0t20oehEQ",
  authDomain: "sdh-sports.firebaseapp.com",
  projectId: "sdh-sports",
  storageBucket: "sdh-sports.appspot.com",
  messagingSenderId: "338136825664",
  appId: "1:338136825664:web:5d164477dca247fe5584a5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const google = new GoogleAuthProvider();

export const dataBase = getFirestore(app);