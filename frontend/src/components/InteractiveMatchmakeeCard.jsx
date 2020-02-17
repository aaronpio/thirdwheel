import React from "react";
import MatchmakeeCard from "./MatchmakeeCard";
import "./InteractiveMatchmakeeCard.module.scss";

export default function InteractiveMatchmakeeCard({ user }) {
  return (
    <div>
      <MatchmakeeCard user={user} />
    </div>
  );
}
