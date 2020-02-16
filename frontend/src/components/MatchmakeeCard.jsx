import React from "react";
import "./MatchmakeeCard.scss";
import ThumbsUp from "./buttons/ThumbsUp";

const MatchmakeeCard = props => {
  return (
    <li className="matchmakee_card">
      <img src={props.img}></img>
      <div>
        <header>
          <h2 id="name">{props.name}</h2>
          <h2>{props.age}</h2>
        </header>
        <p align="left"> {props.bio}</p>
      </div>
      <ThumbsUp />
    </li>
  );
};

export default MatchmakeeCard;