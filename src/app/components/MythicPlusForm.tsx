"use client";
import React from "react";
import { useState } from "react";

type Props = {};

function MythicPlusForm({}: Props) {
  const [dungeonName, setDungeonName] = useState("");
  const [guide, setGuide] = useState("");
  const [classes, setClasses] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      "http://127.0.0.1:5000/get_mythic_plus_guide",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dungeon_name: dungeonName, classes: classes }),
      },
    );

    const data = await response.json();
    setGuide(data.guide);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Dungeon Name:</label>
          <input
            type="text"
            placeholder="Which Dungeon are you running?"
            value={dungeonName}
            onChange={(e) => setDungeonName(e.target.value)}
          />
        </div>
        <div>
          <label>Affixes:</label>
          <input
            type="text"
            placeholder="Which Classes are in your group?"
            value={classes}
            onChange={(e) => setClasses(e.target.value)}
          />
        </div>
        <button type="submit">Get Guide</button>
      </form>
      {guide && (
        <div>
          <h3>Guide:</h3>
          <p>{guide}</p>
        </div>
      )}
    </div>
  );
}

export default MythicPlusForm;
