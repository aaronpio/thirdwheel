import React from "react";
import styles from "./LoadingCard.module.scss";
import LoadingAnimation from "./LoadingAnimation";

const LoadingCard = props => {
  return (
    <div className={styles.card}>
      <div className={styles.loading}>
        <LoadingAnimation />
      </div>
    </div>
  );
};

export default LoadingCard;
