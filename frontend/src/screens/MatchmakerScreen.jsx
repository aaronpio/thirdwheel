import React, { useState, useEffect } from "react";
import produce from "immer";
import MatchmakerGrid from "../components/MatchmakerGrid";
import MatchmakerSidebar from "../components/MatchmakerSidebar";
import {
  getCandidates,
  getCandidatesFiltered,
  getRandomUser,
  getRandomUserFiltered,
  createMatch
} from "../api";
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

    if (topPick) {
      getRandomUserFiltered(topPick).then(res => {
        const newCandidates = produce(candidates, draft => {
          const index = candidates.findIndex(usr => usr === user);
          if (
            res.data === user ||
            candidates.includes(user) ||
            bottomPick === user ||
            topPick === user
          ) {
            // Not very D-R-Y
          }
          draft[index] = res.data;
        });
        setCandidates(newCandidates);
      });
    } else {
      getRandomUser().then(res => {
        const newCandidates = produce(candidates, draft => {
          const index = candidates.findIndex(usr => usr === user);
          if (
            res.data === user ||
            candidates.includes(user) ||
            bottomPick === user ||
            topPick === user
          ) {
            // Not very D-R-Y
          }
          draft[index] = res.data;
        });
        setCandidates(newCandidates);
      });
    }
  };

  const fetchCandidates = user => {
    setCandidates(new Array(6).fill(null));
    setLoading(true);

    if (user) {
      getCandidatesFiltered(user).then(res => {
        setCandidates(res.data);
        setLoading(false);
      });
    } else {
      getCandidates().then(res => {
        setCandidates(res.data);
        setLoading(false);
      });
    }
  };

  useEffect(() => {
    shuffle();
  }, []);

  const shuffle = user => {
    if (!user) {
      fetchCandidates(topPick);
    } else {
      fetchCandidates(user);
    }
  };

  const select = user => {
    if (topPick === null) {
      setTopPick(user);
      shuffle(user);
      return;
    } else setBottomPick(user);
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

  const [showTopBtn, setShowTopBtn] = useState(true);

  useEffect(() => {
    if (bottomPick) setShowTopBtn(false);
    else setShowTopBtn(true);
  }, [topPick, bottomPick]);

  const removeFromSidebar = _user => {
    if (bottomPick && topPick) {
      if (_user === bottomPick) setBottomPick(null);
      return;
    }
    if (_user === bottomPick) setBottomPick(null);
    if (_user === topPick) setTopPick(null);
  };

  const genderIcons = userGender => {
    let gender_image;
    switch (userGender) {
      case 1:
        gender_image = "M-symbol.png";
        break;
      case 2:
        gender_image = "F-symbol.png";
        break;
      case 3:
        gender_image = "NB-symbol.png";
        break;
    }
    return gender_image;
  };

  let topPickGenderIcon;

  // useEffect(() => {
  //   if (topPick) {
  //     topPickGenderIcon = genderIcons(topPick.gender_id);
  //     let topPickGenderLookingForIcon = genderIcons(topPick.gender_id);
  //   }
  // }, [topPick]);

  const singleCandidate = { ...candidates[0] };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.filter_line}>
          {topPick && candidates ? (
            <>
              <img src={topPickGenderIcon} />
              <h2>{`${topPick.name} Identifies As `}</h2>
              <img
                className={styles.img_symbol}
                src={genderIcons(topPick.gender_id)}
              />
              <h2>{`And Is Seeking`}</h2>
              <img
                className={styles.img_symbol}
                src={genderIcons(singleCandidate.gender_id)}
              />
            </>
          ) : (
            <h2>Select A Dater</h2>
          )}
        </div>
        <MatchmakerGrid
          candidates={candidates}
          select={select}
          selectRemove={selectRemove}
          shuffle={shuffle}
          loading={loading}
        />
      </main>
      <aside>
        <MatchmakerSidebar
          picks={[topPick, bottomPick]}
          removeFromSidebar={removeFromSidebar}
          confirmMatch={confirmMatch}
          showTopBtn={showTopBtn}
        />
      </aside>
    </>
  );
}
