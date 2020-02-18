import React, { useState, useEffect } from "react";
import produce from "immer";
import MatchmakerGrid from "../components/MatchmakerGrid";
import MatchmakerSidebar from "../components/MatchmakerSidebar";
import { getCandidates, getUser, getRandomUser } from "../api";
import styles from "./MatchmakerScreen.module.scss";

export default function MatchmakerScreen({ user }) {
  const [candidates, setCandidates] = useState(new Array(6).fill(null));
  const [topPick, setTopPick] = useState(null);
  const [bottomPick, setBottomPick] = useState(null);

  const select = user => {
    if (topPick === null) setTopPick(user);
    else setBottomPick(user);

    const newCandidates = produce(candidates, draft => {
      const index = candidates.findIndex(usr => usr === user);
      draft[index] = null;
    });
    setCandidates(newCandidates);

    return getUser(11).then(res => {
      const newCandidates = produce(candidates, draft => {
        const index = candidates.findIndex(usr => usr === user);
        draft[index] = res.data;
      });
      setCandidates(newCandidates);
    });
  };

  const selectRemove = user => {
    const newCandidates = produce(candidates, draft => {
      const index = candidates.findIndex(usr => usr === user);
      draft[index] = null;
    });
    setCandidates(newCandidates);

    return getUser(12).then(res => {
      const newCandidates = produce(candidates, draft => {
        const index = candidates.findIndex(usr => usr === user);
        draft[index] = res.data;
      });
      setCandidates(newCandidates);
    });
  };

  const removeFromSidebar = _user => {
    if (_user === bottomPick) setBottomPick(null);
    if (_user === topPick) setTopPick(null);
  };

  const fetchCandidates = () => {
    setCandidates(new Array(6).fill(null));

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
      <main className={styles.main}>
        <MatchmakerGrid
          candidates={candidates}
          select={select}
          selectRemove={selectRemove}
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
