import React from "react";
import styles from "./MatchmakeeCard.module.scss";

const MatchmakeeCard = ({ user }) => {
  const picStyle = {
    backgroundImage: `url(${user?.image_url})`,
    backgroundSize: "contain",
    width: "12rem",
    height: "12rem",
    borderRadius: "2em 0px 0px 4em",
    boxShadow: "inset 6px 6px 0px rgba(0, 0, 0, 0.15)"
  };

  return (
    <li className={styles.card}>
      <div style={picStyle}></div>
      <div>
        <header>
          <h1 className="name">{user.name}</h1>
          <h2 className="age">{user.age}</h2>
        </header>
        <p align="left"> {user.bio}</p>
      </div>
    </li>
  );
};

export default MatchmakeeCard;
