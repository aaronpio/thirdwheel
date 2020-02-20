import React, { useState } from "react";
import Button from "../components/Button";
import styles from "./LoginScreen.module.scss";
import { login } from "../api";

export default function LoginScreen({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main>
      <form className={styles.form} action="/api/session/login" method="POST">
        <input
          onChange={e => setEmail(e.target.value)}
          className={styles.input}
          type="text"
          placeholder="Email"
        />
        <input
          onChange={e => setPassword(e.target.value)}
          className={styles.input}
          type="text"
          placeholder="Password"
        />
        <Button
          onClick={e => {
            e.preventDefault();
            login(email, password).then(res => res.data && setUser(res.data));
          }}
        >
          Log In
        </Button>
      </form>
    </main>
  );
}
