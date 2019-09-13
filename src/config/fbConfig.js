import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAqhUi2kedP4DxGGn0D3E18S0YDWy3ymao",
    authDomain: "manpro-77ecf.firebaseapp.com",
    databaseURL: "https://manpro-77ecf.firebaseio.com",
    projectId: "manpro-77ecf",
    storageBucket: "manpro-77ecf.appspot.com",
    messagingSenderId: "624656806131",
    appId: "1:624656806131:web:e60488119fe96778b7c786"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase; 