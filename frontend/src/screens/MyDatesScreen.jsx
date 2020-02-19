import React, { useState, useEffect } from "react";
import MyDates from "../components/MyDates";
import ProfileSidebar from "../components/ProfileSidebar";
import { getDates, getUser } from "../api";
import LoadingAnimation from "../components/LoadingAnimation";
import styles from "./MyDatesScreen.module.scss";

export default function MyDatesScreen({ user }) {
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDates = user => {
    getDates(2).then(res => {
      //change from 1 to user.id eventually

      setDates(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchDates(user);
  }, []);

  return (
    <>
      <main className={styles.my_dates_screen}>
        <h2>My Dates</h2>
        <LoadingAnimation />
        {loading ? (
          <LoadingAnimation />
        ) : (
          <MyDates user={user} myDates={dates} />
        )}
      </main>
      <aside>
        <ProfileSidebar user={user} />
      </aside>
    </>
  );
}
