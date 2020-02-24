import React from "react";
import InteractiveDateCard from "./InteractiveDateCard";
import styles from "./MyDates.module.scss";

const MyDates = props => {
  const matchmakeeCardComponents = props.myDates.map(date => (
    <InteractiveDateCard
      key={date.match_id}
      matchId={date.match_id}
      user={date}
      dismissDate={props.dismissDate}
      storeActiveDate={props.storeActiveDate}
    />
  ));

  return <ul className={styles.my_dates}>{matchmakeeCardComponents}</ul>;
};

export default MyDates;
