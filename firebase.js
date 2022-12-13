import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCsgb5Ri0DRK9gE0nJ0PYCh9BLByhbJatE",
  authDomain: "rn-uber-eats-clone-yt.firebaseapp.com",
  projectId: "rn-uber-eats-clone-yt",
  storageBucket: "rn-uber-eats-clone-yt.appspot.com",
  messagingSenderId: "791658363133",
  appId: "1:791658363133:web:91e4fe1be6f3f23467a694",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;


// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyBsXsEKoP26asD8mKl2YdAT1gD6MbqTvLo",
//   authDomain: "uber-eats-c9626.firebaseapp.com",
//   databaseURL: "https://uber-eats-c9626-default-rtdb.firebaseio.com",
//   projectId: "uber-eats-c9626",
//   storageBucket: "uber-eats-c9626.appspot.com",
//   messagingSenderId: "996274194181",
//   appId: "1:996274194181:web:f095c9ef55eb38c823996c"
// };


// const app = initializeApp(firebaseConfig);
