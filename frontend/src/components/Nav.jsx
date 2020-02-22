import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

export default function Nav({ user }) {
  return (
    <nav>
      {user && (
        <>
          <Link to="/profile">
            <h1 className={styles.logo}>ThirdWheel</h1>
          </Link>
          <div>
            <Link to="/matchmaker">Matchmaker</Link>
            <Link to="/profile">My Profile</Link>
          </div>
        </>
      )}
    </nav>
  );
}
