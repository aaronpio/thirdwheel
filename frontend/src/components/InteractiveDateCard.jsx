import React from "react";
import MatchmakeeCard from "./MatchmakeeCard";
import styles from "./InteractiveDateCard.module.scss";
import FloatingButton from "./FloatingButton";

export default function InteractiveDateCard({ user }) {
  return (
    <div className={styles.interactive_card}>
      <MatchmakeeCard user={user} />
      <FloatingButton chat_button user={user} message={"Send A Message"} />
      <FloatingButton dismiss_button user={user} message={"Dismiss"} />
    </div>
  );
}
