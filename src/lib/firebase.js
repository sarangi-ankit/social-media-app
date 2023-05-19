
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAiphhY4riX5i5X-h62m6eB83xLSGGGDPI",
  authDomain: "social-media-app-1f1b6.firebaseapp.com",
  projectId: "social-media-app-1f1b6",
  storageBucket: "social-media-app-1f1b6.appspot.com",
  messagingSenderId: "396589376029",
  appId: "1:396589376029:web:1d9ec6fb8fc756c9ac5cf4"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);