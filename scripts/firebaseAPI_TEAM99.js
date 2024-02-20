//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyAFH0umoBXsvaisqI8G5ZZ0qdjr_gILKtY",
    authDomain: "comp1800-202410-demo-d5a94.firebaseapp.com",
    projectId: "comp1800-202410-demo-d5a94",
    storageBucket: "comp1800-202410-demo-d5a94.appspot.com",
    messagingSenderId: "768403008693",
    appId: "1:768403008693:web:deca399b0139128415e2fc"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
