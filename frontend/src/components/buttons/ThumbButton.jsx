import React from "react";
import classNames from "classnames";
import styles from "./ThumbButton.module.scss";

const ThumbButton = props => {
  const buttonClass = classNames(styles.button, {
    [styles.up_button]: props.up_button,
    [styles.down_button]: props.down_button
  });

  return (
    <button className={buttonClass} onClick={props.onClick}>
      <img src="/thumb.png" alt="thumb" />
    </button>
  );
};

export default ThumbButton;
