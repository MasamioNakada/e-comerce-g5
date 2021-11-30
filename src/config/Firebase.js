import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/auth"


const config = {
    apiKey: "AIzaSyA8l9GPPatQdzE_2d8UYtTlOVayH1v5JbE",
    authDomain: "proectog5.firebaseapp.com",
    projectId: "proectog5",
    storageBucket: "proectog5.appspot.com",
    messagingSenderId: "760986816117",
    appId: "1:760986816117:web:3d21e13a6a7bcdc348f23c",
    measurementId: "G-6ZKD6M9236"
};

const app = firebase.initializeApp(config);
// const storage = firebase.storage();
const auth = app.auth()

export {  firebase, auth};