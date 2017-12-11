import * as firebase from 'firebase'

// Initialize Firebase
const config = {
	apiKey: "AIzaSyCGedgt5FlmnzGmC50iuvUoh9rg144j5qo",
	authDomain: "goal-coach-22990.firebaseapp.com",
	databaseURL: "https://goal-coach-22990.firebaseio.com",
	projectId: "goal-coach-22990",
	storageBucket: "",
	messagingSenderId: "639230807983"
};
export	const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals')