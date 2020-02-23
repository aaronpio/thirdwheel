import React, { useState } from "react";
import Button from "../components/Button";
import LoginSidebar from "../components/LoginSidebar";
import styles from "./LoginScreen.module.scss";
import { login } from "../api";

export default function LoginScreen({ setUserAndLocalStorage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <main className={styles.screen}>
        <h1 className={styles.logo}>ThirdWheel</h1>
        <form className={styles.form} action="/api/session/login" method="POST">
          <h1>Sign In For Love</h1>
          <input
            onChange={e => setEmail(e.target.value.trim())}
            className={styles.input}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={e => setPassword(e.target.value.trim())}
            className={styles.input}
            type="password"
            placeholder="Password"
          />

          <Button
            onClick={e => {
              e.preventDefault();
              login(email, password).then(
                res => res.data && setUserAndLocalStorage(res.data)
              );
            }}
          >
            Log In
          </Button>
        </form>
      </main>
    </>
  );
}
