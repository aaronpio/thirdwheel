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
      <section>{<LoadingAnimation />}</section>
    </li>
  );
  // return (
  //   <div className={styles.card}>
  //     <div className={styles.loading}>
  //       <LoadingAnimation />
  //     </div>
  //   </div>
  // );
};

export default LoadingCard;
