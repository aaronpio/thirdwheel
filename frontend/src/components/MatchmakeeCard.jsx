import React from "react";
import styles from "./MatchmakeeCard.module.scss";

const MatchmakeeCard = ({ user }) => {
  return (
    <li className={styles.card}>
      <div>
        <h2 className="name">{user.name}, {user.age}</h2>
        <p align="left"> {user.bio}</p>
      </div>
      <img src={user?.image_url}></img>
    </li>
  );
};

export default MatchmakeeCard;
