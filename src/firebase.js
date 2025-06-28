// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Add Firestore import

const firebaseConfig = {
  apiKey: "AIzaSyCG_7w2ZxRky9nVAuZFSRu2P98bezMwCPA",
  authDomain: "sharemyride-c14bc.firebaseapp.com",
  databaseURL: "https://sharemyride-c14bc-default-rtdb.firebaseio.com",
  projectId: "sharemyride-c14bc",
  storageBucket: "sharemyride-c14bc.firebasestorage.app",
  messagingSenderId: "691612039553",
  appId: "1:691612039553:web:cf0ce5f0ac5a47ab569080",
  measurementId: "G-3TKXD35GEL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app); // ✅ Export Firestore
