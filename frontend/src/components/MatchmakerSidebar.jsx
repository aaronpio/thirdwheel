import React from "react";
import "./MatchmakerSidebar.module.scss";
import Picture from "./Picture";
import FloatingButton from "./FloatingButton";

export default function MatchmakerSidebar({ picks, removeFromSidebar }) {
  return (
    <>
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
    </>
  );
}
