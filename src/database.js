import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyBEzNtaD9yrL6ieUE-ZkoNN96rRqnKLFmw',
	authDomain: 'card-flip-940e3.firebaseapp.com',
	databaseURL: 'https://card-flip-940e3.firebaseio.com',
	projectId: 'card-flip-940e3',
	storageBucket: 'card-flip-940e3.appspot.com',
	messagingSenderId: '730893002821',
	appId: '1:730893002821:web:716eae8d47ac40f0e29b2c',
	measurementId: 'G-1ZYM7DC64L',
});

const db = firebaseApp.firestore();

export default db;
