import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  
  apiKey: "AIzaSyBi5ZDREYUMWVyOgi4KnqsNEhZ_T-bfIzg",
  authDomain: "ecdcasa.firebaseapp.com",
  projectId: "ecdcasa",
  storageBucket: "ecdcasa.appspot.com",
  messagingSenderId: "66305393246",
  appId: "1:66305393246:web:0ef7e8031c392f15eaeacf"
  
  
  // apiKey: "AIzaSyC0Oyp1nFuGW0lPPwxJD-KyIiVCJyN2u_E",
  // authDomain: "woven-ceremony-302005.firebaseapp.com",
  // projectId: "woven-ceremony-302005",
  // storageBucket: "woven-ceremony-302005.appspot.com",
  // messagingSenderId: "892127754931",
  // appId: "1:892127754931:web:5e78fa3b8bb0ca9b9f4ec6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);