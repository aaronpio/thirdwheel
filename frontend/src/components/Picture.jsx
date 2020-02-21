import React from "react";
import styles from "./Picture.module.scss";

export default function Picture({ user }) {
  const style = {
    backgroundColor: "#ffc6c7", //<= background color
    backgroundImage: `url(${user?.image_url})`,
    backgroundSize: "contain",
    borderRadius: "228px",
    boxShadow: "inset 8px 8px 0px rgba(0, 0, 0, 0.25)",
    width: "228px",
    height: "228px",
    margin: "auto",
    display: "block",
    textAlign: "center",
    fontFamily: "'Lobster Two', cursive",
    fontSize: "180px",
    color: "#558695" //<= question mark color
  };

  return (
    <div className={styles.container}>
      <div style={style}>{!user && "?"}</div>
      <h2 className={styles.picname}>{user ? user.name : "Take your pick"}</h2>
    </div>
  );
}
