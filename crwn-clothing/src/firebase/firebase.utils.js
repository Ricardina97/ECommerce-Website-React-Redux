import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyCeeJxORqeYBo1d8HqgCNV_GbKafqXtpj4',
    authDomain: 'crwn-db-f353b.firebaseapp.com',
    databaseURL: 'https://crwn-db-f353b.firebaseio.com',
    projectId: 'crwn-db-f353b',
    storageBucket: 'crwn-db-f353b.appspot.com',
    messagingSenderId: '1058643821257',
    appId: '1:1058643821257:web:193f8efb5150d2ed570318',
    measurementId: 'G-01CFTJDDPK',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
