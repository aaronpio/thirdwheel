import React from "react";
import "./MatchmakerSidebar.module.scss";
import Picture from "./Picture";
import PicturePlaceholder from "./PicturePlaceholder";

export default function MatchmakerSidebar({ picks }) {
  return (
    <>
      {picks[0] ? <Picture user={picks[0]} /> : <PicturePlaceholder />}
      {picks[1] ? <Picture user={picks[1]} /> : <PicturePlaceholder />}
    </>
  );
}
