import React from "react";
import { motion } from "framer-motion";
import AiLogoMaker from "./AiLogoMaker";

type Props = {};

function LandingPage({}: Props) {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="container mx-auto flex h-screen flex-col p-5 md:flex-row">
        {/* Left Section */}
        <div className="flex w-full flex-col items-center justify-center md:w-1/2">
          <div>
            <h1 className="mb-4 bg-clip-text text-5xl font-black tracking-tight text-white drop-shadow-xl sm:text-6xl md:text-7xl">
              InstaLogo AI{" "}
              <div
                className="tooltip tooltip-open inline-block tracking-normal"
                data-tip="This logo was made with InstaLogo AI"
              >
                {" "}
                <img
                  src="/logo1.png"
                  width={55}
                  height={55}
                  className="inline-block"
                  alt="InstaLogo"
                />{" "}
              </div>
            </h1>
            <p className="mb-8 text-xl text-white">
              Welcome to the AI-Powered Logo Maker! Simply enter a description
              of your desired logo in the prompt field below and specify the
              size. Click "Generate Logo" and our AI will create a unique logo
              for you based on your input. Once generated, you can download the
              logo directly. Get started now and design your brand's identity
              effortlessly!
            </p>

            <div className="mt-2 flex justify-center"></div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="rounded-lg bg-white p-10 px-8 text-center shadow-lg">
            <AiLogoMaker />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
