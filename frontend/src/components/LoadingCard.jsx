import React from "react";
import styles from "./LoadingCard.module.scss";
import LoadingAnimation from "./LoadingAnimation";

const LoadingCard = props => {
  return (
    <li className={styles.card}>
      <div>
        <h2 className="name"></h2>
        <p align="left"> </p>
      </div>
      <section>
        <p className={styles.spacer}>hii</p>
        <LoadingAnimation />
      </section>
    </li>
  );
};

export default LoadingCard;
