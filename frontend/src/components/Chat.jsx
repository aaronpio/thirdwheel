import React from "react";
import styles from "./Chat.module.scss";

export default function Chat({ user, messages }) {
  return (
    <>
      {messages.map(msg => (
        <p>{msg.text}</p>
      ))}
    </>
  );
}
