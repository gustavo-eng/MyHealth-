
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCldwGRFeqaNXOTgP-5P8s0WzTVUZgV0us",
  authDomain: "myhealth-62a3a.firebaseapp.com",
  projectId: "myhealth-62a3a",
  storageBucket: "myhealth-62a3a.appspot.com",
  messagingSenderId: "990009828621",
  appId: "1:990009828621:web:1df7a2852435528e73bc44"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {app, auth} 





