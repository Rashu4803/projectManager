import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBYuslG-we5CeoI7wKwb3Psml0dDd1jwXc",
    authDomain: "rashu123site.firebaseapp.com",
    projectId: "rashu123site",
    storageBucket: "rashu123site.appspot.com",
    messagingSenderId: "743421729331",
    appId: "1:743421729331:web:a0e1bc2887c6ae2b492146"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth,projectStorage,timestamp }