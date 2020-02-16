import React from "react";
import { Link } from "react-router-dom";
import "./ProfileSidebar.scss";
import Picture from "./Picture";

export default function ProfileSidebar({ user }) {
  return (
    <>
      <Picture {...user} />
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
        <Link to="/logout">
          <p>Log Out</p>
        </Link>
      </div>
    </>
  );
}
