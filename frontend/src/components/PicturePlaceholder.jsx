import React from "react";
import styles from "./PicturePlaceholder.module.scss";

export default function PicturePlaceholder({}) {
  const style = {
    borderRadius: "228px",
    boxShadow: "inset 8px 8px 0px rgba(1, 1, 1, 0.25)",
    backgroundColor: "#beeee2",
    width: "228px",
    height: "228px",
    margin: "auto",
    display: "flex"
  };

  return (
    <div style={style}>
      <h1 className={styles.questionmark}>?</h1>
    </div>
  );
}
