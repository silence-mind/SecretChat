import classes from "./Chats.module.css";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { useAuth } from "../../contexts/AuthContext";
import auth from "../../firebase";

const Chats = () => {
  const didMountRef = useRef(false);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
  };

  async function getFile(url) {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "test.jpg", { type: "image/jpeg" });
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (!user || user === null) {
        history.push("/");
        return;
      }

      axios
        .get("https://api.chatengine.io/users/me", {
          headers: {
            "project-id": "55c67436-0bcc-4444-a687-83c3d7655597",
            "user-name": user.email,
            "user-secret": user.uid,
          },
        })

        .then(() => setLoading(false))

        .catch((e) => {
          let formdata = new FormData();
          formdata.append("email", user.email);
          formdata.append("username", user.email);
          formdata.append("secret", user.uid);

          getFile(user.photoURL).then((avatar) => {
            formdata.append("avatar", avatar, avatar.name);

            axios
              .post("https://api.chatengine.io/users/me", formdata, {
                headers: {
                  "private-key": "b332102b-3366-45a1-a1e9-5dda0948ba1f",
                },
              })
              .then(() => setLoading(false))
              .catch((e) => console.log("e", e.response));
          });
        });
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    }
  }, [user, history]);

  if (!user || loading) return <div />;

  return (
    <div className={classes.chatspage}>
      <div className={classes.navbar}>
        <div className={classes.logotab}>Secret-Chat</div>

        <div className={classes.logout} onClick={handleLogout}>
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectID="55c67436-0bcc-4444-a687-83c3d7655597"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};
export default Chats;
