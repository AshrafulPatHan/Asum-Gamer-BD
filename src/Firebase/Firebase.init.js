// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
apiKey: "AIzaSyCnJiWxtgAYbdC8IjyU2gUcahwwmzC6Pv0",
authDomain: "chillgamer-10bf2.firebaseapp.com",
projectId: "chillgamer-10bf2",
storageBucket: "chillgamer-10bf2.firebasestorage.app",
messagingSenderId: "940536753681",
appId: "1:940536753681:web:d1d34ffdce0905bdbe8bb0"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;





