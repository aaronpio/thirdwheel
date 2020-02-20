import React from "react";
import styles from "./MatchedCard.module.scss";
import Picture from "./Picture";
import LoadingAnimation from "./LoadingAnimation";

const MatchedCard = ({ match }) => {
  const user1 = {
    name: match.matchee1_name,
    image_url: match.matchee1_image_url
  };

  const user2 = {
    name: match.matchee2_name,
    image_url: match.matchee2_image_url
  };

  return (
    <li className={styles.card}>
      <Picture user={user1} />
      <div>
        <LoadingAnimation slow />
      </div>
      <Picture user={user2} />
    </li>
  );
};

export default MatchedCard;
