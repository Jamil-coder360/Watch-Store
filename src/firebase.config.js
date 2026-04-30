// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLJILLYdAX-QpTu_eK588oCWGq8DxRXrc",
  authDomain: "cassi-watch.firebaseapp.com",
  projectId: "cassi-watch",
  storageBucket: "cassi-watch.firebasestorage.app",
  messagingSenderId: "763863681545",
  appId: "1:763863681545:web:38d0afc3d43aebf26686d8",
  measurementId: "G-V3Y20VQP46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth ;