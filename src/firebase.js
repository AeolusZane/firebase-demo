import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJ7tpsMMM1kKtZLCCzPHSsGJCcdJzJurM",
    authDomain: "master-8f64d.firebaseapp.com",
    projectId: "master-8f64d",
    storageBucket: "master-8f64d.firebasestorage.app",
    messagingSenderId: "489429158431",
    appId: "1:489429158431:web:40c093835e63537fe9632a",
    measurementId: "G-2BDV2EFHZY"
};

firebase.initializeApp(firebaseConfig);

window.firebase = firebase;
export const firestore = firebase.firestore();

export default firebase;