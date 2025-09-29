import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GameStage } from "../game-world";

interface NavigationButtonsProps {
  onNext: () => void;
  onPrevious: () => void;
  currentStage: GameStage;
  stages: GameStage[];
}

export const NavigationButtons = ({
  onNext,
  onPrevious,
  currentStage,
  stages,
}: NavigationButtonsProps) => {
  const currentIndex = stages.indexOf(currentStage);
  const isFirstStage = currentIndex === 0;
  const isLastStage = currentIndex === stages.length - 1;

  return (
    <div className="flex space-x-4">
      {!isFirstStage && (
        <Button
          onClick={onPrevious}
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-full shadow-lg flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" /> Previous
        </Button>
      )}
      {!isLastStage && (
        <Button
          onClick={onNext}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center gap-2"
        >
          {currentStage === "intro" ? "Start Journey" : "Next Stage"} <ArrowRight className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};