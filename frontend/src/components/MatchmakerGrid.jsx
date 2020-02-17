import React from "react";
import "./MatchmakerGrid.module.scss";
import MatchmakeeCard from "./MatchmakeeCard";

export default function MatchmakerGrid({ candidates }) {
  return (
    <>
      <div className="grid">
        {candidates.map(user => (
          <MatchmakeeCard user={user} />
        ))}
      </div>
    </>
  );
}
