import React from "react";
import styles from "./Chat.module.scss";

export default function Chat({ user, messages }) {
  return (
    <div className={styles.chat}>
      {messages.map((msg, i) => {
        const side = msg.user === user ? "right" : "left";
        return (
          <p className={styles.msg + " " + styles[side]} key={i}>
            {msg.text}
          </p>
        );
      })}
    </div>
  );
}
