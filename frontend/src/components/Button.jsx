import React from "react";
import styles from "./Button.module.scss";

export default function Button({ shuffle, match, onClick, children }) {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
