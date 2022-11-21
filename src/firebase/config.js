import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: 'AIzaSyCpHWNPUcuOv9vHggHLj-rGi8YgjyKfsbE',
    authDomain: 'live-chat-391a0.firebaseapp.com',
    projectId: 'live-chat-391a0',
    storageBucket: 'live-chat-391a0.appspot.com',
    messagingSenderId: '399934773345',
    appId: '1:399934773345:web:7a5e008883f57cdfd7f220'
};

firebase.initializeApp(firebaseConfig);
const projectFiresore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
    projectFiresore,
    timestamp
}