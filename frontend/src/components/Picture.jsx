import React from "react";
import styles from "./Picture.module.scss";

export default function Picture({ user }) {
  const style = {
    backgroundColor: "#FFB9B9",
    backgroundImage: `url(${user?.image_url})`,
    backgroundSize: "contain",
    borderRadius: "228px",
    boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.4)",
    width: "228px",
    height: "228px",
    margin: "auto",
    display: "block",
    textAlign: "center",
    fontFamily: "'Lobster Two', cursive",
    fontSize: "180px",
    color: "white", //<= question mark color
    border: `${user ? "solid" : "dashed"} 8px white`
  };

  return (
    <div className={styles.container}>
      <div style={style}>{!user && "?"}</div>
      <h2 className={styles.picname}>{user ? user.name : "Take your pick"}</h2>
    </div>
  );
}
