import React from "react";
import classNames from "classnames";
import styles from "./ThumbsDown.module.scss";

const ThumbsDown = props => {
  const buttonClass = classNames(styles.down_button, {
    "styles.button--selected": props.selected
  });

  return (
    <button className={buttonClass} onClick={props.onClick}>
      <img src="/thumb_down.png" alt="thumb_down" />
    </button>
  );
};

export default ThumbsDown;
