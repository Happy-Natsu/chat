import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyC_kXOtx55hT8LWuz2AeOcHgRsAhunsZPI",
  authDomain: "chat-app-48ff2.firebaseapp.com",
  projectId: "chat-app-48ff2",
  storageBucket: "chat-app-48ff2.appspot.com",
  messagingSenderId: "21504918775",
  appId: "1:21504918775:web:c417259e372ff2198dfff2",
  measurementId: "G-65C6QCYHND"
  

});
const db =firebaseapp.firestore();
export default db;