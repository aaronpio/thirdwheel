import React, { useState, useEffect } from "react";
import MatchesMade from "../components/MatchesMade";
import ProfileSidebar from "../components/ProfileSidebar";
import { getMatches } from "../api";
import LoadingAnimation from "../components/LoadingAnimation";
import styles from "./MatchesMadeScreen.module.scss";

export default function MatchesMadeScreen({ setUser, user }) {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMatches = user => {
    getMatches(user.id).then(res => {
      setMatches(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchMatches(user);
  }, []);

  return (
    <>
      <main className={styles.my_matches_screen}>
        <h1>Matches Made</h1>
        {loading ? (
          <div className={styles.loading_animation}>
            <LoadingAnimation large />
          </div>
        ) : (
          <MatchesMade user={user} matchesMade={matches} />
        )}
      </main>
      <aside>
        <ProfileSidebar user={user} setUser={setUser} />
      </aside>
    </>
  );
}
