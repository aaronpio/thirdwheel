import React from "react";
import styles from "./LoadingCard.module.scss";

const LoadingCard = props => {
  return (
    <li className={styles.card}>
      <img className={styles.loading} src="status.png" alt="loadingImg" />
    </li>
  );
};

export default LoadingCard;
