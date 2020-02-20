import React, { useState, useEffect } from "react";
import produce from "immer";
import MatchmakerGrid from "../components/MatchmakerGrid";
import MatchmakerSidebar from "../components/MatchmakerSidebar";
import { getCandidates, getUser, getRandomUser, createMatch } from "../api";
import styles from "./MatchmakerScreen.module.scss";

export default function MatchmakerScreen({ user }) {
  const [candidates, setCandidates] = useState(new Array(6).fill(null));
  const [topPick, setTopPick] = useState(null);
  const [bottomPick, setBottomPick] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = user => {
    const newCandidates = produce(candidates, draft => {
      const index = candidates.findIndex(usr => usr === user);
      draft[index] = null;
    });
    setCandidates(newCandidates);

    getRandomUser().then(res => {
      const newCandidates = produce(candidates, draft => {
        const index = candidates.findIndex(usr => usr === user);
        if (
          res.data === user ||
          candidates.includes(user) ||
          bottomPick === user ||
          topPick === user
        ) {
          // retry
          console.log("duplicate!!");
        }
        draft[index] = res.data;
      });
      setCandidates(newCandidates);
    });
  };

  const select = user => {
    if (topPick === null) setTopPick(user);
    else setBottomPick(user);
    fetchUser(user);
  };

  const selectRemove = user => {
    fetchUser(user);
  };

  const confirmMatch = () => {
    createMatch(user.id, topPick.id, bottomPick.id).then(res =>
      console.log(res)
    );
    setTopPick(null);
    setBottomPick(null);
  };

  const removeFromSidebar = _user => {
    if (_user === bottomPick) setBottomPick(null);
    if (_user === topPick) setTopPick(null);
  };

  const fetchCandidates = () => {
    setCandidates(new Array(6).fill(null));
    setLoading(true);
    getCandidates().then(res => {
      setCandidates(res.data);
      setLoading(false);
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
          loading={loading}
        />
      </main>
      <aside>
        <MatchmakerSidebar
          picks={[topPick, bottomPick]}
          removeFromSidebar={removeFromSidebar}
          confirmMatch={confirmMatch}
        />
      </aside>
    </>
  );
}
