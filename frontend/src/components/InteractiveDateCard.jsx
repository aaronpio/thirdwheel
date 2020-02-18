import React from "react";
import MatchmakeeCard from "./MatchmakeeCard";
import styles from "./InteractiveDateCard.module.scss";
import FloatingButton from "./FloatingButton";

export default function InteractiveDateCard({ user }) {
  return (
    <div className={styles.interactive_card}>
      <MatchmakeeCard user={user} />
      <FloatingButton up_button user={user} message={"👍"} />
      <FloatingButton down_button user={user} message={"👎"} />
    </div>
  );
}
