// React app needs to know about your firebase app
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// firebase dashboard project settings for the app....
const firebaseConfig = {
      /* ADD YOUR API KEY FROM FIREBASE CONSOLE  */
      apiKey: "AIzaSyD9PxqnYwoGuCBLxuClXe8vsadqG2jS_Xg",
      authDomain: "react-employee-manager-8a4b8.firebaseapp.com",
      projectId: "react-employee-manager-8a4b8",
      storageBucket: "react-employee-manager-8a4b8.appspot.com",
      messagingSenderId: "886302475820",
      appId: "1:886302475820:web:a5abf8b0061e2957923389",
      measurementId: "G-JGSXD9HLDK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  //This is optional
  // export const auth = firebase.auth();
  // export const db = firebase.firestore();
//   const storage = firebase.storage()

//   export {auth, db, storage}

  export default firebaseApp