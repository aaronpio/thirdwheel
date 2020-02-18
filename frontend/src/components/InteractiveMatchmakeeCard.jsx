import React from "react";
import MatchmakeeCard from "./MatchmakeeCard";
import styles from "./InteractiveMatchmakeeCard.module.scss";
import FloatingButton from "./FloatingButton";
import LoadingCard from "./LoadingCard";

export default function InteractiveMatchmakeeCard({
  user,
  select,
  selectRemove
}) {
  return (
    <div className={styles.interactive_card}>
      {!user ? (
        <LoadingCard />
      ) : (
        <>
          <MatchmakeeCard user={user} />
          <FloatingButton
            check_button
            user={user}
            message={"✔"}
            onClick={() => select(user)}
          />
          <FloatingButton
            x_button
            user={user}
            message={"𝗫"}
            onClick={() => selectRemove(user)}
          />
        </>
      )}
    </div>
  );
}
