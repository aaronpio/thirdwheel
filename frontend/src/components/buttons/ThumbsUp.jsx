import React from "react";
import classNames from "classnames";
// import thumb from "../../.././public/thumb.png";

const ThumbsUp = props => {
  const buttonClass = classNames("button", {
    //"button--confirm": props.confirm,
    "button--selected": props.selected
  });

  return (
    <button className={buttonClass} onClick={props.onClick}>
      <img src="/thumb.png" alt="thumb" />
    </button>
  );
};

export default ThumbsUp;
