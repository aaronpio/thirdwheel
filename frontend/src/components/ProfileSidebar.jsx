import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProfileSidebar.module.scss";
import Picture from "./Picture";

export default function ProfileSidebar({ logout, user }) {
  return (
    <div className={styles.profile_sidebar}>
      <Picture user={user} />
      <div className={styles.profile_links}>
        <Link to="/dates">
          <p>My Dates</p>
        </Link>
        <Link to="/matches">
          <p>Matches Made</p>
        </Link>
        <button onClick={logout}>Log Out</button>
      </div>
    </div>
  );
}
