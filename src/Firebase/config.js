import firebase from "firebase";
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAAQEu1p1hsf9imnSkHqdx3LGr-2XIEQrk",
    authDomain: "fir-1cdee.firebaseapp.com",
    projectId: "fir-1cdee",
    storageBucket: "fir-1cdee.appspot.com",
    messagingSenderId: "178566762384",
    appId: "1:178566762384:web:e77a15a0beb5b9ec116d15",
    measurementId: "G-EFWD4DTYFF"
  };

  export default firebase.initializeApp(firebaseConfig)