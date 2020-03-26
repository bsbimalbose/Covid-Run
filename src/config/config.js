import firebase from "firebase";

const DB_CONFIG = {
  apiKey: "AIzaSyB_l3CPexihSYts1_cIr1G6FsAO5aVhCKU",
  authDomain: "test-4116a.firebaseapp.com",
  databaseURL: "https://test-4116a.firebaseio.com",
  projectId: "test-4116a",
  storageBucket: "test-4116a.appspot.com",
  messagingSenderId: "272567147446",
  appId: "1:272567147446:web:8f01a34a5b460f93db7f17"
};

export const fireBaseApp = firebase.initializeApp(DB_CONFIG);
