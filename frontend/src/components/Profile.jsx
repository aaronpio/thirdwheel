import React from "react";
import styles from "./Profile.module.scss";

export default function Profile({ user }) {
  return (
    <article className={styles.profile}>
      <div>
        <h3>Age</h3>
        <h3>City</h3>
        <h3>Identifies as</h3>
        <h3>Bio</h3>
      </div>
      <div>
        <p>{user.age}</p>
        <p>{user.city}</p>
        <p>{user.gender}</p>
        <p>{user.bio}</p>
      </div>
    </article>
  );
}
