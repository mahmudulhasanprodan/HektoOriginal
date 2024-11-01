
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAj6bvHx4VhatDCVMJnO6mNtOnQpI3eKRc",
  authDomain: "hektoproject.firebaseapp.com",
  projectId: "hektoproject",
  storageBucket: "hektoproject.appspot.com",
  messagingSenderId: "981529770572",
  appId: "1:981529770572:web:3551865d437ab5e6c792e9"
};

// Initialize Firebase
const fireapp = initializeApp(firebaseConfig);
export const db = getFirestore(fireapp);
export default fireapp