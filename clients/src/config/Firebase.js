import * as firebase from "firebase"
import firestore from "firebase/firestore"

const config = {
  apiKey: "AIzaSyAntWMEOfpiz07XJuJ15vCxrElKJGzS0kI",
  authDomain: "perpus-dds.firebaseapp.com",
  databaseURL: "https://perpus-dds.firebaseio.com",
  projectId: "perpus-dds",
  storageBucket: "perpus-dds.appspot.com",
  messagingSenderId: "1099355919945",
  appId: "1:1099355919945:web:8c19f5c87556d41e535198",
  measurementId: "G-22G1VZDJDB"
}
firebase.initializeApp(config)

export default firebase
