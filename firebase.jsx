// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyBCaVGvFNYtBssp5EoMtEY2eYUiA7XNbbg",
  authDomain: "areeb-e15f4.firebaseapp.com",
  projectId: "areeb-e15f4",
  storageBucket: "areeb-e15f4.appspot.com",
  messagingSenderId: "215965878673",
  appId: "1:215965878673:web:491574957bc8e6be1d3230",
  measurementId: "G-355Z7BL2NE"

//   apiKey: "AIzaSyC-OsP9d8bG9nilKstG_oA2Ap0WOdW1MwA",
//   authDomain: "testproject-827a4.firebaseapp.com",
//   projectId: "testproject-827a4",
//   storageBucket: "testproject-827a4.appspot.com",
//   messagingSenderId: "396439611458",
//   appId: "1:396439611458:web:8c2264d714c03a613565db",
//   measurementId: "G-HP9ZS83BCD",
//   databaseURL:"https://testproject-827a4-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};