import React from "react";
import { Link } from "react-router-dom";
import MatchmakeeCard from "./MatchmakeeCard";
import styles from "./InteractiveDateCard.module.scss";
import FloatingButton from "./FloatingButton";

export default function InteractiveDateCard({ user, dismissDate, matchId }) {
  return (
    <div className={styles.interactive_card}>
      <MatchmakeeCard user={user} />
      <Link to="/chat">
        <FloatingButton chat_button user={user} message={"Send A Message"} />
      </Link>
      <FloatingButton
        dismiss_button
        user={user}
        message={"Dismiss"}
        onClick={() => dismissDate(matchId)}
      />
    </div>
  );
}
