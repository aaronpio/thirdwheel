import React from "react";
import styles from "./MatchmakeeCard.module.scss";

const MatchmakeeCard = props => {
  return (
    <li className={styles.card}>
      <img src={props.user.img}></img>
      <div>
        <header>
          <h2 id="name">{props.user.name}</h2>
          <h2>{props.user.age}</h2>
        </header>
        <p align="left"> {props.user.bio}</p>
      </div>
    </li>
  );
};

export default MatchmakeeCard;

// <InteractiveMatchmakeeCard
// key={index} //use user.id later
// name={user.name}
// age={user.age}
// bio={user.bio}
// img={user.img}
// />
