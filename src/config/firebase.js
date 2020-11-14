import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyAntZbahU3Tv8vvIeiypLhF6-1Wu75_4a0",
    authDomain: "my-olx-app-js.firebaseapp.com",
    databaseURL: "https://my-olx-app-js.firebaseio.com",
    projectId: "my-olx-app-js",
    storageBucket: "my-olx-app-js.appspot.com",
    messagingSenderId: "971017018960",
    appId: "1:971017018960:web:d9c4147785720f7ec5fb55",
    measurementId: "G-REF034R23Q"
};
firebase.initializeApp(firebaseConfig);


export default firebase;