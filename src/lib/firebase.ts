// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB4zdY4bJsmsJgPgUZ4MRiig-VGqkVsnCw',
  authDomain: 'hammm-a6690.firebaseapp.com',
  projectId: 'hammm-a6690',
  storageBucket: 'hammm-a6690.firebasestorage.app',
  messagingSenderId: '180136870620',
  appId: '1:180136870620:web:649f740804a8aa6368aa19',
  measurementId: 'G-6GV868H0CR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
