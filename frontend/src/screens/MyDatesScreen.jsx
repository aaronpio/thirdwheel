import React from "react";
import MyDates from "../components/MyDates";
import ProfileSidebar from "../components/ProfileSidebar";

export default function ProfileScreen({ user }) {
  return (
    <>
      <main>
        <MyDates user={user} />
      </main>
      <aside>
        <ProfileSidebar user={user} />
      </aside>
    </>
  );
}

