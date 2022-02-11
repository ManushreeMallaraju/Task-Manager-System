// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCkWntfgULQTGOJk0qcUPMsw63_iXgUrM",
    authDomain: "task-manager-system-6e48d.firebaseapp.com",
    projectId: "task-manager-system-6e48d",
    storageBucket: "task-manager-system-6e48d.appspot.com",
    messagingSenderId: "843750079176",
    appId: "1:843750079176:web:993fe7d82a9bb1280cc3fd"
};

// Initialize Firebase and firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }