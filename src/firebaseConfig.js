// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPW8PjCSsuwLXFosuat_OXzGvAE8GNej8",
  authDomain: "car-rentals-3c17a.firebaseapp.com",
  projectId: "car-rentals-3c17a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
