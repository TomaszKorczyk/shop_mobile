import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZhCJMWEyPKCpOusYimmSQhfehNBSaCKk",
  authDomain: "shop-mobile-6a8e6.firebaseapp.com",
  projectId: "shop-mobile-6a8e6",
  storageBucket: "shop-mobile-6a8e6.appspot.com",
  messagingSenderId: "189781979191",
  appId: "1:189781979191:web:a25dd6963c39ff29514fb2",
  measurementId: "G-6CH3P30GRD",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
