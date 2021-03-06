
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*
const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATA_BASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREDMENT_ID
};
*/

const firebaseConfig = {
    apiKey: "AIzaSyCV_hIUvXS8MwSTuLNgM6qQipZSeIET_Mk",
    authDomain: "matrizcurricular-11188.firebaseapp.com",
    databaseURL: "https://matrizcurricular-11188-default-rtdb.firebaseio.com",
    projectId: "matrizcurricular-11188",
    storageBucket: "matrizcurricular-11188.appspot.com",
    messagingSenderId: "279901014347",
    appId: "1:279901014347:web:23446bb0bff41854f7c0ce",
    measurementId: "G-SP56HHHLVQ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export {app};