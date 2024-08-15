"use client";
import React from "react";
import { motion } from "framer-motion";
import AiLogoMaker from "./AiLogoMaker";

function LandingPage() {
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
              size. Click Generate Logo and our AI will create a unique logo for
              you based on your input. Once generated, you can download the logo
              directly. Get started now and design your brand is identity
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
      <div className="sticky bottom-0 flex w-full flex-col items-center justify-center bg-gray-100 p-4 shadow-lg md:flex-row md:p-6">
        <motion.img
          src="/image.png"
          alt="Reactify.AI Preview"
          className="mb-4 w-20 rounded-lg shadow-lg md:mb-0 md:mr-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95, rotate: -2 }}
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-600 md:text-3xl">
            Design React Components with Reactify.AI
          </h2>
          <p className="text-lg text-gray-700">
            Elevate your front-end development process with our AI-powered tool.
            Create, preview, and customize your React components effortlessly.
          </p>
        </div>
        <motion.a
          href="#get-started"
          className="bg-bright-cyan mt-4 rounded bg-[#00B8D9] px-4 py-2 text-lg font-semibold text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#00A5C4] focus:outline-none focus:ring-4 focus:ring-[#00A5C4]/50 md:ml-auto md:mt-0"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Explore Reactify.AI 🚀
        </motion.a>
      </div>
    </div>
  );
}

export default LandingPage;
