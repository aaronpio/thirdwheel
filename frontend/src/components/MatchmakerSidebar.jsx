import React from "react";
import styles from "./MatchmakerSidebar.module.scss";
import Picture from "./Picture";
import FloatingButton from "./FloatingButton";
import Button from "./Button";

export default function MatchmakerSidebar({
  picks,
  removeFromSidebar,
  confirmMatch
}) {
  return (
    <article className={styles.aside}>
      {picks.map((pick, index) => {
        return (
          <div key={index}>
            <Picture user={pick} />
            {pick && (
              <FloatingButton
                x_picture_button
                message={"𝗫"}
                onClick={() => removeFromSidebar(pick)}
              />
            )}
          </div>
        );
      })}
      <Button disabled={!(picks[0] && picks[1])} onClick={confirmMatch}>
        It's a Match
      </Button>
    </article>
  );
}
