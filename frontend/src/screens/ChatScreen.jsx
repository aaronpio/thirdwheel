import React, { useState, useEffect } from "react";
import Chat from "../components/Chat";
import ChatBar from "../components/ChatBar";
import ProfileSidebar from "../components/ProfileSidebar";

const date = { id: 100 };
export default function ChatScreen({ user, socket }) {
  const [messages, setMessages] = useState([
    { text: "Hi", user },
    { text: "Hey wuza", user: date }
  ]);

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

  return (
    <>
      <main>
        <Chat user={user} messages={messages} />
        <ChatBar sendMsg={sendMsg} />
      </main>
      <aside>
        <ProfileSidebar user={user} />
      </aside>
    </>
  );
}
