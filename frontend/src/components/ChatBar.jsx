import React, { useState } from "react";
import Button from "./Button";
import styles from "./ChatBar.module.scss";

export default function ChatBar({ sendMsg }) {
  const [text, setText] = useState("");

  return (
  <div className={styles.container}>
    <form
      id="chat"
      className={styles.form}
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <Button
        onClick={e => {
          e.preventDefault();
          sendMsg({ text });
          document.getElementById("chat").reset();
        }}
        disabled={text.length === 0}
      >
        Send
      </Button>
    </form>
    </div>
  );
}
