import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBikHA6sqCRQGVdzm4Nt_vxHZyA73KHA8E",
    authDomain: "get-me-a-drink.firebaseapp.com",
    databaseURL: "https://get-me-a-drink-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "get-me-a-drink",
    storageBucket: "get-me-a-drink.appspot.com",
    messagingSenderId: "616362234383",
    appId: "1:616362234383:web:968a6c564c752098f6c97a",
    measurementId: "G-F4G1KJEVNJ"
}
firebase.initializeApp(firebaseConfig)
export default firebase