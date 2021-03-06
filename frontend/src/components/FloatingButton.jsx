import React from "react";
import classNames from "classnames";
import styles from "./FloatingButton.module.scss";

const FloatingButton = props => {
  const buttonClass = classNames(styles.button, {
    [styles.up_button]: props.up_button,
    [styles.down_button]: props.down_button,
    [styles.check_button]: props.check_button,
    [styles.x_button]: props.x_button,
    [styles.x_picture_button]: props.x_picture_button,
    [styles.dismiss_button]: props.dismiss_button,
    [styles.chat_button]: props.chat_button
  });

  return (
    <button className={buttonClass} onClick={props.onClick}>
      {props.message}
    </button>
  );
};

export default FloatingButton;
