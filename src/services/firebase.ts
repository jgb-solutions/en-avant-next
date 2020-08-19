import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyB5LFYvye84WEpqdb6rbhxHqdWDwZFxun4",
	authDomain: "en-avant.firebaseapp.com",
	databaseURL: "https://en-avant.firebaseio.com",
	projectId: "en-avant",
	storageBucket: "en-avant.appspot.com",
	messagingSenderId: "823393034858",
	appId: "1:823393034858:web:32fafc2e08fea7d403a013",
	measurementId: "G-KY8MDPCJ4T",
}
// Initialize Firebase
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}
// Setup Analytics
// if (process.env.NODE_ENV === "production") {
// 	firebase.analytics()
// }

// Setup database
const DB = firebase.firestore()

// Set Models
const User = DB.collection("users")

// Setup Auth
const Auth = firebase.auth()

// Export Firebase and the related libraries and tools
export { firebase, User, Auth, DB }
