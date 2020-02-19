import React from "react";
import InteractiveDateCard from "./InteractiveDateCard";
import styles from "./MyDates.module.scss";

const MyDates = props => {
  const matchmakeeCardComponents = props.myDates.map((user, index) => (
    <InteractiveDateCard key={user.id} user={user} />
  ));

  return (
    <div className={styles.my_dates}>
      <h2>My Dates</h2>
      <ul>{matchmakeeCardComponents}</ul>
    </div>
  );
};

export default MyDates;
