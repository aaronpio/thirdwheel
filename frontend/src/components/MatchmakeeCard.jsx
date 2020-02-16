import React from "react";
import "./MatchmakeeCard.scss";

const MatchmakeeCard = props => {
  return (
    <li class="matchmakee_card">
      <img src={props.img}></img>
      <div>
        <header>
          <h2 id="name">{props.name}</h2>
          <h2>{props.age}</h2>
        </header>
        <p align="left"> {props.bio}</p>
      </div>
    </li>
  );
};

export default MatchmakeeCard;
