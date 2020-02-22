import React from "react";
import styles from "./Button.module.scss";

export default function Button({
  shuffle,
  match,
  onClick,
  children,
  disabled
}) {
  return (
    <button
      onClick={!disabled && onClick}
      className={styles.button + " " + (disabled && styles.disabled)}
    >
      {children}
    </button>
  );
}
