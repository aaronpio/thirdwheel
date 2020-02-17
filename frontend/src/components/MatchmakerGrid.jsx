import React from "react";
import styles from "./MatchmakerGrid.module.scss";
import MatchmakeeCard from "./MatchmakeeCard";
import Button from "./Button";

export default function MatchmakerGrid({ candidates }) {
  return (
    <>
      <div className={styles.grid}>
        {candidates.map(user => (
          <MatchmakeeCard user={user} />
        ))}
      </div>
      <Button onClick={() => {}}>Shuffle It!</Button>
    </>
  );
}
