import firebase from "firebase/app";
import "firebase/auth"


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyC_tuTVp9LXyby7hwkIIDYUtHQCBur2pPM",
    authDomain: "unichat-4f718.firebaseapp.com",
    projectId: "unichat-4f718",
    storageBucket: "unichat-4f718.appspot.com",
    messagingSenderId: "171847034753",
    appId: "1:171847034753:web:90285cfb7b0dd561912a80"
}).auth();