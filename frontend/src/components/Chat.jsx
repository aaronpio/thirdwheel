import React from "react";
import styles from "./Chat.module.scss";

export default function Chat({ user, messages, date }) {
  console.log(date);
  return (
    <>
      <div>
        <h3>{date.name}</h3>
        <img src={date.image_url} />
      </div>
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
    </>
  );
}
