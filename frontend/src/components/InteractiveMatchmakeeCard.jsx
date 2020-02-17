import React from "react";
import MatchmakeeCard from "./MatchmakeeCard";
import styles from "./InteractiveMatchmakeeCard.module.scss";
import FloatingButton from "./buttons/FloatingButton";

export default function InteractiveMatchmakeeCard({ user }) {
  return (
    <div className={styles.interactive_card}>
      <MatchmakeeCard user={user} />
      {/* <FloatingButton up_button user={user} message={"👍"} />
      <FloatingButton down_button user={user} message={"👎"} /> */}
      <FloatingButton check_button user={user} message={"O"} />
      <FloatingButton x_button user={user} message={"X"} />
    </div>
  );
}
