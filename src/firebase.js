import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeZT7g-imwJAZpg3q9pdyLkSm9CQoh2Aw",
    authDomain: "facebook-256e2.firebaseapp.com",
    databaseURL: "https://facebook-256e2-default-rtdb.firebaseio.com",
    projectId: "facebook-256e2",
    storageBucket: "facebook-256e2.appspot.com",
    messagingSenderId: "794173849255",
    appId: "1:794173849255:web:1765f85f0c7c06cdade582",
    measurementId: "G-C4FCG36JJX"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth, provider};
  export default db; 