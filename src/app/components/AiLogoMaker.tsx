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
  const [ailogoMakerclicked, setAiLogoMakerClicked] = useState(false);

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
      if (data.image_url) {
        setImageUrl(data.image_url);
        setAiLogoMakerClicked(true);
      }
    } catch (err) {
      setError("Failed to generate logo");
    } finally {
      setLoading(false);
    }
  };
  const handleDownload = () => {
    if (imageUrl) {
      window.open(imageUrl, "_blank");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-5">
      {!ailogoMakerclicked && (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-5 rounded-lg bg-white p-6 shadow-lg hover:border-2 hover:border-[#ffd015]"
        >
          <div>
            <label className="mb-2 block text-gray-700">
              Describe how your logo should look:
            </label>
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              required
              type="text"
              placeholder="Description here..."
              className="input input-bordered input-accent w-full"
            />
          </div>
          <div>
            <label className="mb-2 block text-gray-700">Size:</label>
            <select
              className="select select-accent w-full"
              onChange={(e) => setSize(e.target.value)}
            >
              <option disabled selected>
                What size should the logo be?
              </option>
              <option value="512x512">512x512</option>
              <option value="256x256">256x256</option>
            </select>
          </div>
          <button
            className="btn btn-neutral btn-lg w-full text-white hover:bg-white hover:text-black"
            type="submit"
          >
            Generate Logo
          </button>
        </form>
      )}
      {loading && <p className="mt-5">Generating logo...</p>}
      {error && <p className="mt-5 text-red-500">{error}</p>}
      {imageUrl && (
        <div className="card mt-10 w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={imageUrl} alt="Generated Logo" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Here is your logo!</h2>
            <p>Now just press download and get your logo</p>
            <div className="card-actions">
              <button onClick={handleDownload} className="btn btn-neutral">
                Download Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AiLogoMaker;
