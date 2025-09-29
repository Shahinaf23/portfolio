import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { TempleGate } from "../game-ui/temple-gate";

export const AboutMeSection = () => {
  const [gateOpen, setGateOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full p-4">
      <h2 className="text-4xl font-bold text-yellow-300 drop-shadow-lg mb-8">About Me: The Explorer's Tale</h2>
      <TempleGate isOpen={gateOpen} onOpen={() => setGateOpen(true)} />
      {gateOpen && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-xl max-w-md text-white text-center animate-fade-in">
          <p className="text-lg mb-4">
            Greetings, fellow adventurer! I'm Shahina Fathima, a passionate Data Engineer with a knack for turning raw data into powerful insights and building systems that run as smoothly.My journey in the digital realm began with a curiosity for technology.Over time, I’ve navigated through the jungles of code, mastered the tools of data pipelines, and unlocked treasures of knowledge in Python, SQL, and cloud-based engineering
          </p>
        </div>
      )}
    </div>
  );
};