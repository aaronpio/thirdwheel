import React from "react";
import styles from "./MatchmakerGrid.module.scss";
import InteractiveMatchmakeeCard from "./InteractiveMatchmakeeCard";
import Button from "./Button";

export default function MatchmakerGrid({ candidates }) {
  return (
    <>
      <div className={styles.grid}>
        {candidates.map(user => (
          <InteractiveMatchmakeeCard user={user} />
        ))}
      </div>
      <Button onClick={() => {}}>Shuffle It!</Button>
    </>
  );
}
