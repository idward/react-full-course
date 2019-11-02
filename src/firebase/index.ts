import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD9q2-NyuhJxevkSYz1iMqS9sgNip9WNNo',
  authDomain: 'crwn-db-b61f9.firebaseapp.com',
  databaseURL: 'https://crwn-db-b61f9.firebaseio.com',
  projectId: 'crwn-db-b61f9',
  storageBucket: 'crwn-db-b61f9.appspot.com',
  messagingSenderId: '623556952103',
  appId: '1:623556952103:web:6a52e78fdc0d12b74cce02',
};

firebase.initializeApp(firebaseConfig);

// create firestore instance
const fs = firebase.firestore();

export const createUserProfileDocument = async (userAuth: any, aditionalDatas?: any) => {
  if (!userAuth) return;

  console.log('userAuth: ', userAuth);

  const userRef = fs.doc(`/users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...aditionalDatas });
    } catch (error) {
      console.log('error creating user: ', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
