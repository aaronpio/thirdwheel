import React from "react";
import MatchmakerGrid from "../components/MatchmakerGrid";
import MatchmakerSidebar from "../components/MatchmakerSidebar";

export default function MatchmakerScreen({ user }) {
  return (
    <>
      <main>
        <MatchmakerGrid candidates={[]} />
      </main>
      <aside>
        <MatchmakerSidebar user={user} />
      </aside>
    </>
  );
}
