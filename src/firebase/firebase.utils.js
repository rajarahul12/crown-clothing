import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnshOuIIsZi-OptItbMyrUI6CmeZ-QvdE",
  authDomain: "crown-clothing-js.firebaseapp.com",
  projectId: "crown-clothing-js",
  storageBucket: "crown-clothing-js.appspot.com",
  messagingSenderId: "882580736146",
  appId: "1:882580736146:web:5f1ce3589ff717ee8d3e4b",
  measurementId: "G-N0P05FJBMM",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
