import React from "react";
import styles from "./Profile.module.scss";

const genders = ["Male", "Female", "Non-binary"];

export default function Profile({ user }) {
  return (
    <article className={styles.profile}>
      <div>
        <h3>Age</h3>
        <h3>City</h3>
        <h3>Identifies as</h3>
        <h3>Looking for</h3>
        <h3>Bio</h3>
      </div>
      <div>
        <p>{user.age}</p>
        <p>{user.city}</p>
        <p>{genders[user.gender_id - 1]}</p>
        <p>{user.sexualPreferences.map(gender => gender.name).join(", ")}</p>
        <p>{user.bio}</p>
      </div>
    </article>
  );
}
