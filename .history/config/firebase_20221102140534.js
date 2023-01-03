
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCo1_l8IrXgUiBxTrFttmEgSrPh1rZ3rUs",
  authDomain: "firestore-727b3.firebaseapp.com",
  projectId: "firestore-727b3",
  storageBucket: "firestore-727b3.appspot.com",
  messagingSenderId: "531009165514",
  appId: "1:531009165514:web:12fa69cc55dfcbabb1fc33"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {app, auth}


