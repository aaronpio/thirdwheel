import React from "react";
import styles from "./MatchmakerGrid.module.scss";
import InteractiveMatchmakeeCard from "./InteractiveMatchmakeeCard";
import Button from "./Button";

export default function MatchmakerGrid({
  candidates,
  select,
  selectRemove,
  shuffle
}) {
  return (
    <>
      <div className={styles.grid}>
        {candidates.map(user => (
          <InteractiveMatchmakeeCard
            user={user}
            select={select}
            selectRemove={selectRemove}
          />
        ))}
      </div>
      <Button onClick={() => shuffle}>Shuffle It!</Button>
    </>
  );
}
