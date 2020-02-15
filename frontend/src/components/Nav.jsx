import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export default function Nav({ user }) {
  return (
    <nav>
      <Link to="/"><h1 className="logo">ThirdWheel</h1></Link>
      {user && <Link to="/profile">My Profile</Link>}
    </nav>
  );
}
