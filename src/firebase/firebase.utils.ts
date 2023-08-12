import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOYXU4l4lCphJX_19F74rbPSPe5v1a5fk",
  authDomain: "stylevista-db.firebaseapp.com",
  projectId: "stylevista-db",
  storageBucket: "stylevista-db.appspot.com",
  messagingSenderId: "153149614325",
  appId: "1:153149614325:web:01d6b7b43dadb73c77fdbc",
  measurementId: "G-67BDXM8HKZ",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
