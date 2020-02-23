import React, { useState } from "react";
import styles from "./MatchmakerSidebar.module.scss";
import Picture from "./Picture";
import FloatingButton from "./FloatingButton";
import Button from "./Button";

export default function MatchmakerSidebar({
  picks,
  removeFromSidebar,
  confirmMatch,
  showTopBtn
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
      <div className={animate}>
        <Picture user={picks[0]} text={"Take your pick"} />
        {picks[0] && showTopBtn && (
          <FloatingButton
            x_picture_button
            message={"𝗫"}
            onClick={() => removeFromSidebar(picks[0])}
          />
        )}
      </div>
      <div className={animate}>
        <Picture user={picks[1]} text={"Take your pick"} />
        {picks[1] && (
          <FloatingButton
            x_picture_button
            message={"𝗫"}
            onClick={() => removeFromSidebar(picks[1])}
          />
        )}
      </div>
      <Button
        disabled={!(picks[0] && picks[1])}
        onClick={confirmMatchAndAnimate}
      >
        It's a Match
      </Button>
    </article>
  );
}
