import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2P8ZDG6NC_xphhnzPtef2DEzyCXm29eg",
  authDomain: "reactproject-coderhouse.firebaseapp.com",
  projectId: "reactproject-coderhouse",
  storageBucket: "reactproject-coderhouse.appspot.com",
  messagingSenderId: "941493410886",
  appId: "1:941493410886:web:0aabeed02a56ee2641be47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app
}

