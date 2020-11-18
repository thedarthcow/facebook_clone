import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvPTrf2NkOsEFnaWaPozXPqgEbJWUYBl4",
    authDomain: "facebook-clone-284f5.firebaseapp.com",
    databaseURL: "https://facebook-clone-284f5.firebaseio.com",
    projectId: "facebook-clone-284f5",
    storageBucket: "facebook-clone-284f5.appspot.com",
    messagingSenderId: "976322026448",
    appId: "1:976322026448:web:1e8e98936c5fbc17a037d5",
    measurementId: "G-27Z31JZ2ZZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider };
  export default db;