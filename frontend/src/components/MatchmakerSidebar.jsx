import React from "react";
import "./MatchmakerSidebar.module.scss";
import Picture from "./Picture";

export default function MatchmakerSidebar({ picks }) {
  return (
    <>
      <Picture user={picks[0]} />
      <Picture user={picks[1]} />
    </>
  );
}
