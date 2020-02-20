import React from "react";
import { Link } from "react-router-dom";
import "./ProfileSidebar.module.scss";
import Picture from "./Picture";
import Button from "./Button";

export default function ProfileSidebar({ setUser, user }) {
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <Picture user={user} />
      <div>
        <p>
          Points: <b>{user.points}</b>
        </p>
        <Link to="/dates">
          <p>My Dates</p>
        </Link>
        <Link to="/matches">
          <p>Matches Made</p>
        </Link>
        <Button onClick={logout}>Log Out</Button>
      </div>
    </>
  );
}
