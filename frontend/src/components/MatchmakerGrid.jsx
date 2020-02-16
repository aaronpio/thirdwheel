import React from "react";
import "./MatchmakerGrid.scss";
import MatchmakeeCard from "./MatchmakeeCard";

export default function MatchmakerGrid({ candidates }) {
  return (
    <>
      <div className="grid">
        {candidates.map(user => (
          <MatchmakeeCard />
        ))}
      </div>
    </>
  );
}
