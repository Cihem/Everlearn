
import firebase from 'firebase/app';
import 'firebase/firestore';



var firebaseConfig = {
    apiKey: "AIzaSyDQYq4eLROxHG0rIZ8rggZ31_lKebWeptw",
    authDomain: "projectever-ea1f7.firebaseapp.com",
    projectId: "projectever-ea1f7",
    storageBucket: "projectever-ea1f7.appspot.com",
    messagingSenderId: "465265606000",
    appId: "1:465265606000:web:959b53535db63632ba63b5"
  };
  // Initialize Firebase
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;