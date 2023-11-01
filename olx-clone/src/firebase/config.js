import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage'
import 'firebase/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl4aRu7RJodXVpeey62e2zrvxdxA-iR7s",
  authDomain: "fir-c33ea.firebaseapp.com",
  projectId: "fir-c33ea",
  storageBucket: "fir-c33ea.appspot.com",
  messagingSenderId: "885140046028",
  appId: "1:885140046028:web:9b46d04b771daba2964269",
  measurementId: "G-P960CVZ8D7"
};

  const firebaseapp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseapp)
  
  export default db