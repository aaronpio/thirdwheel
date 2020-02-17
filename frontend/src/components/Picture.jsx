import React from "react";
import styles from "./Picture.module.scss";

export default function Picture({ user }) {
  const { name, image_url } = user;
  const style = {
    backgroundImage: `url(${image_url})`,
    backgroundSize: "contain",
    borderRadius: "228px",
    boxShadow: "inset 8px 8px 0px rgba(0, 0, 0, 0.25)",
    width: "228px",
    height: "228px",
    margin: "auto",
    display: "flex"
  };

  return (
    <div className={styles.container}>
      <div style={style}></div>
      <h2 className={styles.picname}>{name}</h2>
    </div>
  );
}
