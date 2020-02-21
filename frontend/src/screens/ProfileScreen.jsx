import React from "react";
import Profile from "../components/Profile";
import ProfileSidebar from "../components/ProfileSidebar";

export default function ProfileScreen({ logout, user }) {
  return (
    <>
      <main>
        <Profile user={user} />
      </main>
      <aside>
        <ProfileSidebar user={user} logout={logout} />
      </aside>
    </>
  );
}
