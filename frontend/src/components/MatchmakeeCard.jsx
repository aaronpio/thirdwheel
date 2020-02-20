import React from "react";
import styles from "./MatchmakeeCard.module.scss";

const MatchmakeeCard = ({ user }) => {
  const picStyle = {
    width: "14rem",
    height: "14rem",
    borderRadius: "200px",
    boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.15)",
    position: "relative",
    bottom: "15px",
    right: "-60px"
  };

  return (
    <li className={styles.card}>
      <div>
        <h2 className="name">{user.name}, {user.age}</h2>
        <p align="left"> {user.bio}</p>
      </div>
      <img style={picStyle} src={user?.image_url}></img>
    </li>
  );
};

export default MatchmakeeCard;
