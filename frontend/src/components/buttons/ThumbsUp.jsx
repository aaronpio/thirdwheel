import React from "react";
import classNames from "classnames";
import styles from "./ThumbsUp.module.scss";

const ThumbsUp = props => {
  const buttonClass = classNames(styles.up_button, {
    "styles.button--selected": props.selected
  });

  return (
    <button className={buttonClass} onClick={props.onClick}>
      <img src="/thumb.png" alt="thumb" />
    </button>
  );
};

export default ThumbsUp;
