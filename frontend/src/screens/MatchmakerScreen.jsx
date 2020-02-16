import React from "react";
import MatchmakerGrid from "../components/MatchmakerGrid";
import MatchmakerSidebar from "../components/MatchmakerSidebar";

export default function MatchmakerScreen({ user }) {
  return (
    <>
      <main>
        <MatchmakerGrid user={user} />
      </main>
      <aside>
        <MatchmakerSidebar user={user} />
      </aside>
    </>
  );
}


