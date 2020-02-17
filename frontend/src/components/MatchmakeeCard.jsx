import React from "react";
import styles from "./MatchmakeeCard.module.scss";

const MatchmakeeCard = props => {
  return (
    <li className={styles.card}>
      <img src={props.user.image_url}></img>
      <div>
        <header>
          <h1 className="name">{props.user.name}</h1>
          <h2 className="age">{props.user.age}</h2>
        </header>
        <p align="left"> {props.user.bio}</p>
      </div>
    </li>
  );
};

export default MatchmakeeCard;
