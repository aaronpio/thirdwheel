import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

export default function Nav({ user }) {
  return (
    <nav>
      <Link to="/profile">
        <h1 className={styles.logo}>ThirdWheel</h1>
      </Link>
      <div>
        {user && <Link to="/matchmaker">Matchmaker</Link>}
        {user && <Link to="/profile">My Profile</Link>}
      </div>
    </nav>
  );
}
