import { GoogleOutlined } from "@ant-design/icons";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { initializeApp } from "firebase/app";
import classes from "./Login.module.css";
import React, { useState } from "react";
import Loading from "../Loading/Loading";

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

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(error);
    } finally {
      await signInWithRedirect(auth, new GoogleAuthProvider());
      setIsLoading(false);
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.container}>
        <div className={classes.glowing}>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>

        <div className={classes.glowing}>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>

        <div className={classes.glowing}>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>

        <h1 className={classes.h1}>Welcome to Secret Chat</h1>
        <div className={classes.loginPage}>
          <div className={classes.Logincard}>
            <form className={classes.form}>
              <h3>Enter Your name OR Sign In With Google</h3>
              <div className={classes.email}>
                <input type="email" placeholder="Enter Your Email" />
                <button onClick={submitHandler} type="submit">
                  Submit
                </button>
              </div>
              <div
                className={classes.login_button_google}
                onClick={submitHandler}
              >
                <GoogleOutlined /> Sign In with Google
              </div>
            </form>
          </div>
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default Login;
