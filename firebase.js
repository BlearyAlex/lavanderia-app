import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDG9KA84nd6HOElVPaQm4zj_SiNKy6YnBw',
  authDomain: 'lavanderia-app-da058.firebaseapp.com',
  projectId: 'lavanderia-app-da058',
  storageBucket: 'lavanderia-app-da058.appspot.com',
  messagingSenderId: '1054195950204',
  appId: '1:1054195950204:web:94a28cc3d34022ce065ff9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
