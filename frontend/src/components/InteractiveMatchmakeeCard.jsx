import React from "react";
import MatchmakeeCard from "./MatchmakeeCard";
import styles from "./InteractiveMatchmakeeCard.module.scss";
import FloatingButton from "./buttons/FloatingButton";

export default function InteractiveMatchmakeeCard({ user, select }) {
  return (
    <div className={styles.interactive_card}>
      <MatchmakeeCard user={user} />
      <FloatingButton
        check_button
        user={user}
        message={"O"}
        onClick={() => select(user)}
      />
      <FloatingButton x_button user={user} message={"X"} />
    </div>
  );
}
