import React from "react";
import MatchmakeeCard from "./MatchmakeeCard";
import styles from "./InteractiveMatchmakeeCard.module.scss";
import ThumbButton from "./buttons/ThumbButton";

export default function InteractiveMatchmakeeCard({ user }) {
  return (
    <div className={styles.interactive_card}>
      <MatchmakeeCard user={user} />
      <ThumbButton classNames="up_button" user={user} />
      <ThumbButton classNames="down_button" user={user} />
    </div>
  );
}
