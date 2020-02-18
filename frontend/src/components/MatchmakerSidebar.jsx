import React from "react";
import "./MatchmakerSidebar.module.scss";
import Picture from "./Picture";
import FloatingButton from "./FloatingButton";
import Button from "./Button";

export default function MatchmakerSidebar({ picks, removeFromSidebar }) {
  return (
    <article>
      {picks.map((pick, index) => {
        return (
          <div key={index}>
            <Picture user={pick} />
            {pick && (
              <FloatingButton
                x_picture_button
                message={"𝗫"}
                onClick={() => removeFromSidebar(pick)}
              />
            )}
          </div>
        );
      })}
      <Button>It's a Match</Button>
    </article>
  );
}
