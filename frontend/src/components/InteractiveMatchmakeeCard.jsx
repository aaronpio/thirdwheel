import React from "react";
import MatchmakeeCard from "./MatchmakeeCard";
import styles from "./InteractiveMatchmakeeCard.module.scss";
import ThumbsUp from "./buttons/ThumbsUp";
import ThumbsDown from "./buttons/ThumbsDown";

export default function InteractiveMatchmakeeCard({ user }) {
  return (
    <div className={styles.interactive_card}>
      <MatchmakeeCard user={user} />
      <ThumbsUp user={user} />
      <ThumbsDown user={user} />
    </div>
  );
}
