// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCTZxySurhuo67VpxUU-7ory0mFH5u4ePk",
    authDomain: "bscsg2.firebaseapp.com",
    projectId: "bscsg2",
    storageBucket: "bscsg2.appspot.com",
    messagingSenderId: "288105823553",
    appId: "1:288105823553:web:ba1a65390119e0e13a75c0",
    measurementId: "G-DYXRC8H248",
    databaseURL:"https://bscsg2-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};