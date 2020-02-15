import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ user }) {
  return (
    <nav>
      <h1 className="logo">ThirdWheel</h1>
      {user && <Link to="/profile">My Profile</Link>}
    </nav>
  );
}
