import React from "react";
import "./Picture.scss";

export default function Picture({ name, image_url }) {
  return (
    <div>
      <div
        className="profilepic"
        style={{ background: `url(${image_url})`, backgroundSize: "contain" }}
      ></div>
      <h2 className="picname">{name}</h2>
    </div>
  );
}
