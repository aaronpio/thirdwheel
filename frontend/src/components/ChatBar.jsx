import React, { useState } from "react";
import Button from "./Button";
import styles from "./ChatBar.module.scss";

export default function ChatBar({ sendMsg }) {
  const [text, setText] = useState("");

  return (
    <form
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
        }}
      >
        Send
      </Button>
    </form>
  );
}
