//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
  apiKey: "AIzaSyAFo6SjF9SaV8G4E-blV39exnp4pLLVqdw",
  authDomain: "team16-9ce6e.firebaseapp.com",
  projectId: "team16-9ce6e",
  storageBucket: "team16-9ce6e.appspot.com",
  messagingSenderId: "747873652512",
  appId: "1:747873652512:web:293b696dcab4ced9539145",
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();