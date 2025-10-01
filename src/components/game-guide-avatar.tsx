"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GameStage } from "./game-world";

interface GameGuideAvatarProps {
  currentStage: GameStage;
}

export const GameGuideAvatar = ({ currentStage }: GameGuideAvatarProps) => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let newMessage = "";
    switch (currentStage) {
      case "intro":
        newMessage = "Welcome, adventurer! Click 'Start Journey' to begin exploring my portfolio.";
        break;
      case "about":
        newMessage = "Discover my story and passion for data engineering. Open the temple gate!";
        break;
      case "skills":
        newMessage = "These are my power-ups! See the skills I've mastered.";
        break;
      case "projects":
        newMessage = "Explore my projects and the treasures I've unearthed.";
        break;
      case "contact":
        newMessage = "Ready to connect? Find my details here!";
        break;
      case "end":
        newMessage = "You've reached the end of the journey! Feel free to restart.";
        break;
      default:
        newMessage = "Let's continue our adventure!";
    }
    setMessage(newMessage);
    setShowMessage(true); // Show message when stage changes
    const timer = setTimeout(() => setShowMessage(false), 5000); // Hide after 5 seconds
    return () => clearTimeout(timer);
  }, [currentStage]);

  return (
    <div className="absolute bottom-4 right-4 z-50 flex items-end">
      {showMessage && message && (
        <div className="relative bg-gray-800 text-white p-3 rounded-lg shadow-lg mr-3 max-w-xs animate-fade-in">
          <p className="text-sm">{message}</p>
          <div className="absolute bottom-2 -right-2 w-0 h-0 border-l-8 border-l-gray-800 border-t-8 border-t-transparent border-b-8 border-b-transparent rotate-45"></div>
        </div>
      )}
      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-yellow-400 shadow-lg bg-gray-800 animate-bounce-slow">
        <Image
          src="/images/shahi.png"
          alt="Guide Avatar"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </div>
  );
};