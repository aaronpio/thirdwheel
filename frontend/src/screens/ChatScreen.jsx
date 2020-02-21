import React, { useState, useEffect } from "react";
import Chat from "../components/Chat";
import ChatBar from "../components/ChatBar";
import ProfileSidebar from "../components/ProfileSidebar";
import styles from "./ChatScreen.scss";

export default function ChatScreen({ setUser, user, socket }) {
  console.log("Creating socket.io client");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receive msg", msg => {
      setMessages(prev => [...prev, msg]);
    });
  }, []);

  const sendMsg = msg => {
    msg.userId = user.id;
    socket.emit("send msg", msg);
    setMessages(prev => [...prev, msg]);
  };

  return (
    <>
      <main className={styles.grid}>
        <Chat user={user} messages={messages} />
        <ChatBar sendMsg={sendMsg} />
      </main>
      <aside>
        <ProfileSidebar user={user} setUser={setUser} />
      </aside>
    </>
  );
}
