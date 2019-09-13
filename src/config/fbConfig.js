import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC0_5_NcnC_FQeQYD3olZQGY-FsqvM9tYE",
    authDomain: "marioplan-e6b6e.firebaseapp.com",
    databaseURL: "https://marioplan-e6b6e.firebaseio.com",
    projectId: "marioplan-e6b6e",
    storageBucket: "",
    messagingSenderId: "450725327488",
    appId: "1:450725327488:web:fca08ac41410a211cdac65"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase; 