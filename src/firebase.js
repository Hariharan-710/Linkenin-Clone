import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA-RGAX5cLxcP9aKnTGOhCrxKuIKluUq0E",
    authDomain: "linkedin-clone-417c7.firebaseapp.com",
    projectId: "linkedin-clone-417c7",
    storageBucket: "linkedin-clone-417c7.appspot.com",
    messagingSenderId: "717636405577",
    appId: "1:717636405577:web:f352fea1b7760d77ee7298"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth=firebase.auth();

  export {db, auth};