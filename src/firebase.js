
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCYnxDmbIe3Lsuc0zjKX_rQ8-OPgmesc4g",
  authDomain: "react-authentication-dd978.firebaseapp.com",
  projectId: "react-authentication-dd978",
  storageBucket: "react-authentication-dd978.appspot.com",
  messagingSenderId: "146665423000",
  appId: "1:146665423000:web:7f232fb61356aa8bcad0ed",
  measurementId: "G-KQK26CDRF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;