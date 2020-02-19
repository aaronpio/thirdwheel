import React, { useState } from "react";
import MyDates from "../components/MyDates";
import ProfileSidebar from "../components/ProfileSidebar";
import { getDates, getUser } from "../api";

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

  fetchDates(user);

  return (
    <>
      <main>
        <MyDates user={user} myDates={dates} />
      </main>
      <aside>
        <ProfileSidebar user={user} />
      </aside>
    </>
  );
}
