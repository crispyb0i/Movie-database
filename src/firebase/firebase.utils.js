import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyBJMdZHOR6qzr4UjB778sVB1ftCyLj3DGQ",
  authDomain: "movie-database-9fad9.firebaseapp.com",
  projectId: "movie-database-9fad9",
  storageBucket: "movie-database-9fad9.appspot.com",
  messagingSenderId: "990263906915",
  appId: "1:990263906915:web:e7bb47809fdc87ae13de56",
  measurementId: "G-PB96KRKND9"
};

export const createUserProfileDocument = async (userAuth,additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
