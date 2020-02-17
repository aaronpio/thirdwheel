import React, { useState, useEffect } from "react";
import MatchmakerGrid from "../components/MatchmakerGrid";
import MatchmakerSidebar from "../components/MatchmakerSidebar";
import { getCandidates } from "../api";

export default function MatchmakerScreen({ user }) {
  const [candidates, setCandidates] = useState([]);
  const [topPick, setTopPick] = useState(null);
  const [bottomPick, setBottomPick] = useState(null);

  const select = user => {
    if (topPick === null) setTopPick(user);
    else if (bottomPick === null) {
      setBottomPick(user);
    } else {
      console.log("to do; swap bottom with selected");
    }
  };

  const removeFromSidebar = userId => {
    if ((userId = bottomPick.id)) setBottomPick(null);
    if ((userId = topPick.id)) setTopPick(null);
  };

  const removeFromGrid = userId => {};

  const fetchCandidates = () => {
    getCandidates().then(res => {
      console.log(res.data);
      setCandidates(res.data);
    });
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <>
      <main>
        <MatchmakerGrid
          candidates={candidates}
          select={select}
          shuffle={fetchCandidates}
        />
      </main>
      <aside>
        <MatchmakerSidebar
          picks={[topPick, bottomPick]}
          removeFromSidebar={removeFromSidebar}
        />
      </aside>
    </>
  );
}
