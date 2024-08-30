import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC1Sy4N6vdhTtt5ColFYmVcdzFu49_1luE",
  authDomain: "desafio3-4ed79.firebaseapp.com",
  projectId: "desafio3-4ed79",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);