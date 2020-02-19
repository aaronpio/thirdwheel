import React from "react";
import InteractiveDateCard from "./InteractiveDateCard";
import styles from "./MyDates.module.scss";

const MyDates = props => {
  const matchmakeeCardComponents = props.myDates.map((user, index) => (
    <InteractiveDateCard key={user.id} user={user} />
  ));

  return <ul className={styles.my_dates}>{matchmakeeCardComponents}</ul>;
};

export default MyDates;
