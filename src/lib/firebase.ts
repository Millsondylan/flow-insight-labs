import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDldgEhIhSesbOB_FhG4LVCCkJn_VyGVzQ",
  authDomain: "insightflowai-83bda.firebaseapp.com",
  projectId: "insightflowai-83bda",
  storageBucket: "insightflowai-83bda.firebasestorage.app",
  messagingSenderId: "1076741444373",
  appId: "1:1076741444373:web:cd88953ea6988ec8ff8f1c",
  measurementId: "G-1JC8HBZXPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only in browser environment
let analytics: any = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };