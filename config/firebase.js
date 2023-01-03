
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { initializeFirestore } from "firebase/firestore"
import { getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCgA_F1n8zfvZ76B6Cfok3xOvf6kFI3O8w",
  authDomain: "meuapp-47b29.firebaseapp.com",
  projectId: "meuapp-47b29",
  storageBucket: "meuapp-47b29.appspot.com",
  messagingSenderId: "810489435530",
  appId: "1:810489435530:web:6dc872ee3d27edabc66473"
};



const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db  = initializeFirestore(app, {experimentalAutoDetectLongPolling: true})

const storage = getStorage(app)

export {app, auth, db, storage}



