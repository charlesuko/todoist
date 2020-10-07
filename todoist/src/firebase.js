import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAchov7fZUBwPjT57Us7DfUa3O78Vdwdqo",
    authDomain: "todoist-tut-5dcc0.firebaseapp.com",
    databaseURL: "https://todoist-tut-5dcc0.firebaseio.com",
    projectId: "todoist-tut-5dcc0",
    storageBucket: "todoist-tut-5dcc0.appspot.com",
    messagingSenderId: "764838637259",
    appId: "1:764838637259:web:5596af3e1f0245629e754e"
});

export {firebaseConfig as firebase};