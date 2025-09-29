"use client";

import React, { useState, useEffect } from "react";
import { GamePlayer } from "./game-player";
import { GamePath } from "./game-path";
import { NavigationButtons } from "./game-ui/navigation-buttons";
import { AboutMeSection } from "./sections/about-me-section";
import { SkillsSection } from "./sections/skills-section";
import { ProjectsSection } from "./sections/projects-section";
import { ContactSection } from "./sections/contact-section";

export type GameStage = "intro" | "about" | "skills" | "projects" | "contact" | "end";

export const GameWorld = () => {
  const [currentStage, setCurrentStage] = useState<GameStage>("intro");
  const [pathOffset, setPathOffset] = useState(0); // For simulating forward movement

  const stages: GameStage[] = ["intro", "about", "skills", "projects", "contact", "end"];

  const goToNextStage = () => {
    const currentIndex = stages.indexOf(currentStage);
    if (currentIndex < stages.length - 1) {
      setCurrentStage(stages[currentIndex + 1]);
      setPathOffset(prev => prev - 100); // Move path visually
    }
  };

  const goToPreviousStage = () => {
    const currentIndex = stages.indexOf(currentStage);
    if (currentIndex > 0) {
      setCurrentStage(stages[currentIndex - 1]);
      setPathOffset(prev => prev + 100); // Move path visually
    }
  };

  const renderSection = () => {
    switch (currentStage) {
      case "about":
        return <AboutMeSection />;
      case "skills":
        return <SkillsSection />;
      case "projects":
        return <ProjectsSection />;
      case "contact":
        return <ContactSection />;
      case "intro":
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-white text-center p-8">
            <h2 className="text-5xl font-bold mb-4 text-yellow-300 drop-shadow-lg">Welcome to My Portfolio Adventure!</h2>
            <p className="text-xl mb-8 max-w-2xl">
              Navigate through ancient ruins and mystical jungles to discover my journey, skills, and projects.
              Click 'Start Journey' to begin!
            </p>
            <NavigationButtons
              onNext={goToNextStage}
              onPrevious={goToPreviousStage}
              currentStage={currentStage}
              stages={stages}
            />
          </div>
        );
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-blue-400 to-green-600">
      {/* Background elements for jungle feel */}
      <div className="absolute inset-0 bg-[url('/globe.svg')] bg-repeat opacity-10 animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-[url('/file.svg')] bg-repeat opacity-5 animate-pulse-fast"></div>

      {/* Game Path */}
      <GamePath pathOffset={pathOffset} />

      {/* Player Character */}
      <GamePlayer />

      {/* Current Section Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        {renderSection()}
      </div>

      {/* Navigation Buttons */}
      {currentStage !== "intro" && currentStage !== "end" && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <NavigationButtons
            onNext={goToNextStage}
            onPrevious={goToPreviousStage}
            currentStage={currentStage}
            stages={stages}
          />
        </div>
      )}
    </div>
  );
};