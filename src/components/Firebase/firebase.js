import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

// const config = {
//     apiKey: "AIzaSyBvZCGnae_TIzphFvjCKZI9x6b2K0M622Q",
//     authDomain: "bookmark-react.firebaseapp.com",
//     databaseURL: "https://bookmark-react.firebaseio.com",
//     projectId: "bookmark-react",
//     storageBucket: "bookmark-react.appspot.com",
//     messagingSenderId: "1076229454814",
//     appId: "1:1076229454814:web:cc188a22e7b4a881e17b4f",
//     measurementId: "G-VS2792XF70"
//   };

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // Auth API

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // User API
  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;
