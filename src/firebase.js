import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAe9AVxD06jDm41KxmUGs3TVUZM3CWQhS4",
  authDomain: "secret-chat-f74a7.firebaseapp.com",
  projectId: "secret-chat-f74a7",
  storageBucket: "secret-chat-f74a7.appspot.com",
  messagingSenderId: "760328453741",
  appId: "1:760328453741:web:89b96c932b6286eb2ec964",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default auth;
