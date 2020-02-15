import React from "react";
import "./Picture.scss";

export default function Picture({ user }) {
  return (
    <nav>
      <Link to="/"><h1 className="logo">ThirdWheel</h1></Link>
      {user && <Link to="/profile">My Profile</Link>}
    </nav>
  );
}
