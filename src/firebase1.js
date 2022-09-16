import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore/lite";


import { getFirestore } from "firebase/firestore";
import {
  getAuth,

} from "firebase/auth";


  const firebaseConfig = {
    apiKey: "AIzaSyCSmN-ek4VuYz-xkBGTK3lVVmXJofywxaI",
    authDomain: "netflix-app-38f86.firebaseapp.com",
    projectId: "netflix-app-38f86",
    storageBucket: "netflix-app-38f86.appspot.com",
    messagingSenderId: "789785680765",
    appId: "1:789785680765:web:7c9c74a2e2ad575627ca14"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);

  const auth = getAuth();
  
  export default db;
  export { firebaseApp, auth };

