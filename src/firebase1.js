import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore/lite";


import { getFirestore } from "firebase/firestore";
import {
  getAuth,

} from "firebase/auth";


  const firebaseConfig = {
    apiKey: "AIzaSyCSmN-ek4VuYz-xkBGmXJofywxaI",
    authDomain: "netflix-app-38f86.firebaseapp.com",
    projectId: "netflix-af86",
    storageBucket: "netflix-a8f86.appspot.com",
    messagingSenderId: "789780765",
    appId: "1:78"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);

  const auth = getAuth();
  
  export default db;
  export { firebaseApp, auth };

