import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDY4W_40ZWuEAf0tzzXwV2JWUq7tZPCDH8",
    authDomain: "react-coder-ecommerce-d316f.firebaseapp.com",
    projectId: "react-coder-ecommerce-d316f",
    storageBucket: "react-coder-ecommerce-d316f.appspot.com",
    messagingSenderId: "974375552148",
    appId: "1:974375552148:web:6446c469554a2262256081",
};

// Inicializamos la app
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () =>{
    return firebase.firestore(app)
}
