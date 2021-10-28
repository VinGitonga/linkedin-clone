import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBKqIwXhzkfJup9R7NptUJVcNHaj9OnKj0",
    authDomain: "linkedin-clone-646c8.firebaseapp.com",
    projectId: "linkedin-clone-646c8",
    storageBucket: "linkedin-clone-646c8.appspot.com",
    messagingSenderId: "1039402140772",
    appId: "1:1039402140772:web:af24a2241a36cd8ab70b71"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage }

export default db;
