import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
  apiKey: "AIzaSyBYpwny5Wmp4Mbbjoe8beYmTyOp27aaZek",
  authDomain: "projeto-cadastro-a96ea.firebaseapp.com",
  projectId: "projeto-cadastro-a96ea",
  storageBucket: "projeto-cadastro-a96ea.appspot.com",
  messagingSenderId: "146586698816",
  appId: "1:146586698816:web:7752424738f281499c0ba5",
  measurementId: "G-M3GVZLN0YT"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}



export default firebase;





