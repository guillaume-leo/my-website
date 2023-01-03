import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDabTEBE6lhDAHU_QaoqzvjxN775yra0-o',
  authDomain: 'guillaume-leo-website.firebaseapp.com',
  databaseURL:
    'https://guillaume-leo-website-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'guillaume-leo-website',
  storageBucket: 'guillaume-leo-website.appspot.com',
  messagingSenderId: '204200758734',
  appId: '1:204200758734:web:f00c017176dc9dbde4ef9f',
  measurementId: 'G-C11DQC2WY1',
};

export const initFirebaseApp = async () => {
  const app = await initializeApp(firebaseConfig);
  return app;
};

export const signInUser = async (email, password) => {
  console.log(email, password);
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((err) => {
    const code = err.code;
    const message = err.message;
    console.log(code, message);
  });
  console.log(credentials);
  return credentials;
};

export const signOutUser = async () => {
  const auth = getAuth();
  const result = await auth.signOut();
  console.log('sign out', result);
  return result;
};

export const initUser = (userRef) => {
  const auth = getAuth();

  auth.onAuthStateChanged((user) => {
    userRef.value = user;
  });
};
