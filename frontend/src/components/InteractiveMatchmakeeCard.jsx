import React from "react";
import MatchmakeeCard from "./MatchmakeeCard";
import styles from "./InteractiveMatchmakeeCard.module.scss";
import ThumbButton from "./buttons/ThumbButton";

export default function InteractiveMatchmakeeCard({ user }) {
  return (
    <div className={styles.interactive_card}>
      <MatchmakeeCard user={user} />
      <ThumbButton up_button user={user} />
      <ThumbButton down_button user={user} />
    </div>
  );
}
