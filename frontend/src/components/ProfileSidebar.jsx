import React from "react";
import { Link } from "react-router-dom";

export default function ProfileSidebar({ user }) {
  return (
  <>
    <div>
      <h2 className="username">{user.name}</h2>
      <p>Points: <b>{user.points}</b></p>
    </div>
    <div>
      <Link to="/dates">My Dates</Link>
      <Link to="/matches">Matches Made</Link>
      <Link to="/logout">Logout</Link>
    </div>
  </>
  );
}
