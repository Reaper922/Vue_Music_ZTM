import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDj2ueRj_QbHvZCX7iuNLtC_ggNFQyAgj0',
  authDomain: 'vue-music-ztm-8d611.firebaseapp.com',
  projectId: 'vue-music-ztm-8d611',
  storageBucket: 'vue-music-ztm-8d611.appspot.com',
  messagingSenderId: '71778369898',
  appId: '1:71778369898:web:4a0de616ad6df3bb68a513'
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export { auth, db, storage, usersCollection, songsCollection, commentsCollection };
