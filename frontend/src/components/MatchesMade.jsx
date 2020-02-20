import React from "react";
import MatchedCard from "./MatchedCard";
import styles from "./MatchesMade.module.scss";

const MatchesMade = props => {
  const MatchedCardComponents = props.matchesMade.map(match => {
    return <MatchedCard key={match.match_id} match={{ ...match }} />;
  });
  return <ul className={styles.matches_made}>{MatchedCardComponents}</ul>;
};

export default MatchesMade;
