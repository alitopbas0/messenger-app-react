import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCjcK3iEJbuRXH7hBk0wzdHCc1krhHJhN4",
    authDomain: "messenger-app-a9272.firebaseapp.com",
    databaseURL: "https://messenger-app-a9272.firebaseio.com",
    projectId: "messenger-app-a9272",
    storageBucket: "messenger-app-a9272.appspot.com",
    messagingSenderId: "319687032742",
    appId: "1:319687032742:web:94cce0e346431a79079967",
    measurementId: "G-RGG6MF17QY"
})

const db = firebaseApp.firestore();

export default db;