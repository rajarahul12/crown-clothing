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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
