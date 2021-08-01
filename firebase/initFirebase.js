import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import 'firebase/database'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/performance'

const clientCredentials = {
  apiKey: "AIzaSyBf2mDdddgVhDxjZlbpPWzFLIZb5qChebw",
  authDomain: "house-of-music-c0c01.firebaseapp.com",
  databaseURL: "https://house-of-music-c0c01-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "house-of-music-c0c01",
  storageBucket: "house-of-music-c0c01.appspot.com",
  messagingSenderId: "137956244848",
  appId: "1:137956244848:web:bdaf19858447d50cf4e3b5",
}

  if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials)

    if (typeof window !== 'undefined') {
      if ('measurementId' in clientCredentials) {
        firebase.analytics()
        firebase.performance()
      }
    }
    console.log('Firebase was successfully init.')
  }

export default firebase
