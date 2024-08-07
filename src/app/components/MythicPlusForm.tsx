"use client";
import React, { useEffect } from "react";
import { useState } from "react";

type Props = {};

function MythicPlusForm({}: Props) {
  const [dungeonName, setDungeonName] = useState("");
  const [guide, setGuide] = useState("");
  const [classes, setClasses] = useState("");
  const [src, setSrc] = useState("");

  useEffect(() => {
    if (dungeonName.includes("Ara-Kara")) {
      setSrc("/Ara-Kara.png");
    } else {
      setSrc("");
    }
  }, [dungeonName]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
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

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setGuide(data.guide);
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Dungeon Name:</label>
          <select
            className="select select-primary w-full max-w-xs"
            onChange={(e) => setDungeonName(e.target.value)}
          >
            <option disabled selected>
              What Dungeon are you looking for ?
            </option>
            <option>Ara-Kara</option>
            <option>Necrotic Wake</option>
            <option>Mist of Tirna</option>
            <option>...</option>
          </select>
        </div>
        <div>
          <label>Affixes:</label>
          <input
            type="text"
            className="text-black"
            placeholder="Which Classes are in your group?"
            value={classes}
            onChange={(e) => setClasses(e.target.value)}
          />
        </div>
        <button type="submit">Get Guide</button>
      </form>
      {dungeonName ? <img src={src} alt="" /> : null}
      {guide && (
        <div>
          <h3>Guide:</h3>
          {dungeonName ? <h4>{dungeonName}</h4> : null}
          <p>{guide}</p>
        </div>
      )}
    </div>
  );
}

export default MythicPlusForm;
