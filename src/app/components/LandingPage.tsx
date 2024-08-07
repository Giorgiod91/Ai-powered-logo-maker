import React from "react";
import { motion } from "framer-motion";
import AiLogoMaker from "./AiLogoMaker";

type Props = {};

function LandingPage({}: Props) {
  return (
    <div className="bg-myBackground h-screen">
      <div className="container mx-auto flex h-screen flex-col p-5 md:flex-row">
        <div className="flex w-full flex-col items-center justify-center md:w-1/2">
          <div>
            <h1 className="mb-4 bg-clip-text text-5xl font-black tracking-tight drop-shadow-xl sm:text-6xl md:text-7xl">
              InstaLogo AI{" "}
              <div
                className="tooltip tooltip-open"
                data-tip="this Logo was made with InstaLogo Ai"
              >
                <button className="btn">
                  {" "}
                  <img src="" />{" "}
                </button>
              </div>
            </h1>
            <p className="mb-8 text-xl">
              Welcome to the AI-Powered Logo Maker! Simply enter a description
              of your desired logo in the prompt field below and specify the
              size. Click "Generate Logo" and our AI will create a unique logo
              for you based on your input. Once generated, you can download the
              logo directly. Get started now and design your brand's identity
              effortlessly!
            </p>
            <button className="btn btn-wide mb-4">
              <a href="#EventErstellen">Jetzt loslegen</a>
            </button>

            <div className="mt-2 flex justify-center"></div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="px-8 text-center">
            <AiLogoMaker />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
