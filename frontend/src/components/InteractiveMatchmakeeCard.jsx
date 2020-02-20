import React, { useState } from "react";
import MatchmakeeCard from "./MatchmakeeCard";
import styles from "./InteractiveMatchmakeeCard.module.scss";
import FloatingButton from "./FloatingButton";
import LoadingCard from "./LoadingCard";

export default function InteractiveMatchmakeeCard({
  user,
  select,
  selectRemove
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={styles.interactive_card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!user ? (
        <LoadingCard />
      ) : (
        <>
          <MatchmakeeCard user={user} onClick={() => select(user)} />
          {hovered && (
            <FloatingButton
              x_button
              user={user}
              message={"𝗫"}
              onClick={() => selectRemove(user)}
            />
          )}
        </>
      )}
    </div>
  );
}
