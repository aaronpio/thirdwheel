import React from "react";
import styles from "./Chat.module.scss";

export default function Chat({ user, messages, date }) {
  //console.log("image url: ", date.image_url);
  return (
    <>
      <div className={styles.chat}>
        <div className={styles.date_information}>
          <img
            className={styles.image}
            src={date.image_url}
            alt="date_picture"
          />
          <h2>{`${date.name}, ${date.age}`}</h2>
        </div>
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
