import React, { useState, useEffect } from "react";
import MatchmakerGrid from "../components/MatchmakerGrid";
import MatchmakerSidebar from "../components/MatchmakerSidebar";
import { getCandidates } from "../api";

export default function MatchmakerScreen({ user }) {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    getCandidates().then(res => {
      console.log(res.data);
      setCandidates(res.data);
    });
  }, []);

  return (
    <>
      <main>
        <MatchmakerGrid candidates={candidates} />
      </main>
      <aside>
        <MatchmakerSidebar picks={[]} />
      </aside>
    </>
  );
}
