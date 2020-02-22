import React from "react";
import styles from "./LoginSidebar.module.scss";
import Picture from "./Picture";

export default function LoginSidebar({}) {
  return (
    <div className={styles.login_sidebar}>
      <Picture text={"Find Love"} />
      <Picture text={"Create Love"} />
      <div className={styles.login_links}></div>
    </div>
  );
}
