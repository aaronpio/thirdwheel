import React, { useState, useEffect } from "react";
import Chat from "../components/Chat";
import ChatBar from "../components/ChatBar";
import ProfileSidebar from "../components/ProfileSidebar";
import styles from "./ChatScreen.scss";

export default function ChatScreen({ user, socket, setUser, logout }) {
  const [messages, setMessages] = useState([]);

  const [date, setDate] = useState(null);

  useEffect(() => {
    socket.on("receive msg", msg => {
      setMessages(prev => [...prev, msg]);
    });
  }, [socket]);

  const sendMsg = msg => {
    msg.user = user;
    socket.emit("send msg", msg);
    setMessages(prev => [...prev, msg]);
  };

  useEffect(() => {
    setDate(JSON.parse(localStorage.getItem("date")));
  }, []);

  const style = {
    display: "flex",
    flexDirection: "column",
    height: "calc(96px - 100vh)"
  };

  return (
    <>
      <main style={style}>
        <Chat user={user} messages={messages} date={{ ...date }} />
        <ChatBar sendMsg={sendMsg} />
      </main>
      <aside>
        <ProfileSidebar user={user} setUser={setUser} logout={logout} />
      </aside>
    </>
  );
}
