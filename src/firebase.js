import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCv6W5vo4D3QBOc-albR9Skgcxn-SEyUNA",
	authDomain: "clone-e5e82.firebaseapp.com",
	projectId: "clone-e5e82",
	storageBucket: "clone-e5e82.appspot.com",
	messagingSenderId: "903198519061",
	appId: "1:903198519061:web:6d22453b09ef3b2039831c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
