import React, { useState } from "react";
import styles from "./MatchmakerSidebar.module.scss";
import Picture from "./Picture";
import FloatingButton from "./FloatingButton";
import Button from "./Button";

export default function MatchmakerSidebar({
  picks,
  removeFromSidebar,
  confirmMatch
}) {
  const [animate, setAnimate] = useState(false);

  const confirmMatchAndAnimate = () => {
    setAnimate(styles.bounceOut);
    setTimeout(() => {
      setAnimate(false);
      confirmMatch();
    }, 1000);
  };

  return (
    <article className={styles.aside}>
      {picks.map((pick, index) => {
        return (
          <div key={index} className={animate}>
            <Picture user={pick} text={"Take your pick"} />
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
      <Button
        disabled={!(picks[0] && picks[1])}
        onClick={confirmMatchAndAnimate}
      >
        It's a Match
      </Button>
    </article>
  );
}
