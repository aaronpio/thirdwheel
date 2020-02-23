import React from "react";
import styles from "./MatchmakeeCard.module.scss";

const MatchmakeeCard = ({ user, onClick }) => {
  let gender_image;
  switch (user.gender_id) {
    case 1:
      gender_image = "M-symbol.png";
      break;
    case 2:
      gender_image = "F-symbol.png";
      break;
    case 3:
      gender_image = "NB-symbol.png";
      break;
  }

  return (
    <li className={styles.card} onClick={onClick}>
      <div>
        <header>
          <h2 className="name">
            {user.name}, {user.age}
            <img className={styles.img_symbol} src={gender_image} />
          </h2>
        </header>
        <p align="left"> {user.bio}</p>
      </div>
      <img src={user?.image_url}></img>
    </li>
  );
};

export default MatchmakeeCard;
