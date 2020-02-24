import React, { useState, useEffect } from "react";
import MyDates from "../components/MyDates";
import ProfileSidebar from "../components/ProfileSidebar";
import { getDates, deleteMatch } from "../api";
import LoadingAnimation from "../components/LoadingAnimation";
import styles from "./MyDatesScreen.module.scss";

export default function MyDatesScreen({ logout, user }) {
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDates = user => {
    getDates(user.id).then(res => {
      setDates(res.data);
      setLoading(false);
    });
  };

  const dismissDate = matchId => {
    console.log("React dismiss date function, match_id: ", matchId);
    deleteMatch(matchId);
    fetchDates(user);
  };

  useEffect(() => {
    fetchDates(user);
  }, []);

  const storeActiveDate = date => {
    localStorage.setItem("date", JSON.stringify(date));
  };

  return (
    <>
      <main className={styles.my_dates_screen}>
        <h1>My Dates</h1>
        {loading ? (
          <div className={styles.loading_animation}>
            <LoadingAnimation large />
          </div>
        ) : (
          <MyDates
            user={user}
            myDates={dates}
            dismissDate={dismissDate}
            storeActiveDate={storeActiveDate}
          />
        )}
      </main>
      <aside>
        <ProfileSidebar user={user} logout={logout} />
      </aside>
    </>
  );
}
