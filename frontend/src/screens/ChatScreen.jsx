import React, { useState } from "react";
import Chat from "../components/Chat";
import ProfileSidebar from "../components/ProfileSidebar";
import socketIOClient from "socket.io-client";
import produce from "immer";

export default function ChatScreen({ user }) {
  console.log("Creating socket.io client");
  const socket = socketIOClient("localhost:3002");
  const [messages, setMessages] = useState([]);

  const sendMsg = text => {
    const msg = { text }
    socket.emit("msg", msg);
    const next = produce(messages, draft => draft.push(msg))
    setMessages(next)
  };

  socket.on("msg", msg => {
    const next = produce(messages, draft => draft.push(msg))
    setMessages(next)
  })

  return (
    <>
      <main>
        <Chat user={user} messages={messages} />
      </main>
      <aside>
        <ProfileSidebar user={user} />
      </aside>
    </>
  );
}
