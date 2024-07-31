import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPSVGBWhl47W4hG1v4d9L8aHsKW_wMf-c",
  authDomain: "nextjs-crashcourse.firebaseapp.com",
  projectId: "nextjs-crashcourse",
  storageBucket: "nextjs-crashcourse.appspot.com",
  messagingSenderId: "33650299268",
  appId: "1:33650299268:web:ff147c3085981465888dd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)