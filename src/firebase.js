import firebase from "firebase";

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCRNiglb9UeZewyfQp2okmYeTN9-CpAQtU",
    authDomain: "fir-example-77316.firebaseapp.com",
    databaseURL: "https://fir-example-77316.firebaseio.com",
    projectId: "fir-example-77316",
    storageBucket: "fir-example-77316.appspot.com",
    messagingSenderId: "90449552392"
  };
  firebase.initializeApp(config);

  // at the bottom of src/firebase.js
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider() 
export default firebase;