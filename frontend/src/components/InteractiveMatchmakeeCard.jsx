import React, { useState } from "react";
import MatchmakeeCard from "./MatchmakeeCard";
import styles from "./InteractiveMatchmakeeCard.module.scss";
import FloatingButton from "./buttons/FloatingButton";

export default function InteractiveMatchmakeeCard({ user, select }) {
  const [loading, setLoading] = useState(true);

  const selectAndLoad = () => {
    setLoading(true);
    select(user).then(() => {
      setLoading(false);
    });
  };

  return (
    <div className={styles.interactive_card}>
      <MatchmakeeCard user={user} />
      <FloatingButton
        check_button
        user={user}
        message={"O"}
        onClick={selectAndLoad}
      />
      <FloatingButton x_button user={user} message={"X"} />
    </div>
  );
}
