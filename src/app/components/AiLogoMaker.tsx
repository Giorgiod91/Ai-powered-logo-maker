"use client";
import React, { Children, useEffect } from "react";
import { useState } from "react";

type Props = {};

function AiLogoMaker({}: Props) {
  const [prompt, setPrompt] = useState("");
  const [size, setSize] = useState("512x512");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/get_logo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, size }),
      });

      const data = await response.json();
      setImageUrl(data.image_url);
    } catch (err) {
      setError("Failed to generate logo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Descripe how should your Logo look like:</label>
          <input
            type="text"
            className="text-black"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Size:</label>
          <select
            className="select select-primary w-full max-w-xs"
            onChange={(e) => setSize(e.target.value)}
          >
            <option disabled selected>
              What Size should the logo be ?
            </option>
            <option className="text-black">512x512</option>
            <option className="text-black">256x256</option>
          </select>
        </div>
        <button type="submit">Generate Logo</button>
      </form>
      {loading && <p>Generating logo...</p>}
      {error && <p>{error}</p>}
      {imageUrl && (
        <div>
          <p>Generated Logo:</p>
          <img src={imageUrl} alt="Generated Logo" />
        </div>
      )}
    </div>
  );
}

export default AiLogoMaker;
