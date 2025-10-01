"use client";

import React, { useState, useEffect } from "react";
import { GamePlayer } from "./game-player";
import { GamePath } from "./game-path";
import { NavigationButtons } from "./game-ui/navigation-buttons";
import { AboutMeSection } from "./sections/about-me-section";
import { SkillsSection } from "./sections/skills-section";
import { ProjectsSection } from "./sections/projects-section";
import { ContactSection } from "./sections/contact-section";
import { Button } from "@/components/ui/button";
import { GameGuideAvatar } from "./game-guide-avatar";
import { FloatingElement } from "./game-ui/floating-element"; // Import FloatingElement
import { TreePine, Cloud, Sparkles, Mountain } from "lucide-react"; // Import icons

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

  const resetGame = () => {
    setCurrentStage("intro");
    setPathOffset(0);
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
      case "end":
        return (
          <div className="flex flex-col items-center justify-center h-full text-white text-center p-8">
            <h2 className="text-5xl font-bold mb-4 text-yellow-300 drop-shadow-lg">Journey Complete!</h2>
            <p className="text-xl mb-8 max-w-2xl">
              You've successfully navigated through my portfolio. Thanks for exploring!
            </p>
            <Button
              onClick={resetGame}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center gap-2"
            >
              Start New Journey
            </Button>
          </div>
        );
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
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-green-800 to-emerald-950">
      {/* Floating Background Elements */}
      <FloatingElement icon={TreePine} size="w-20 h-20" color="text-green-700" positionClasses="top-10 left-1/4" delay={0} animation="float" />
      <FloatingElement icon={Cloud} size="w-24 h-24" color="text-gray-400" positionClasses="top-20 right-1/3" delay={1.5} animation="pulse-slow" />
      <FloatingElement icon={Sparkles} size="w-16 h-16" color="text-yellow-300" positionClasses="bottom-1/3 left-1/3" delay={0.8} animation="spin-slow" />
      <FloatingElement icon={Mountain} size="w-32 h-32" color="text-green-900" positionClasses="top-0 left-10" delay={2.5} animation="float" />
      <FloatingElement icon={TreePine} size="w-16 h-16" color="text-green-600" positionClasses="bottom-1/4 right-1/4" delay={0.5} animation="float" />
      <FloatingElement icon={Cloud} size="w-20 h-20" color="text-gray-300" positionClasses="top-1/2 left-10" delay={2} animation="pulse-slow" />


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

      {/* Game Guide Avatar */}
      <GameGuideAvatar currentStage={currentStage} />
    </div>
  );
};