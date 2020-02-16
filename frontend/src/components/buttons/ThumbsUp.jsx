import React from "react";
import classNames from "classnames";

const ThumbsUp = props => {
  const buttonClass = classNames("button", {
    //"button--confirm": props.confirm,
    "button--selected": props.selected
  });

  return (
    <button className={buttonClass} onClick={props.onClick}>
      <img id="thumbBtn" src="/thumb.png" alt="thumb" />
    </button>
  );
};

export default ThumbsUp;
