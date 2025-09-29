import React from "react";
import { Button } from "@/components/ui/button";
import { Gem } from "lucide-react";
import { Project } from "../sections/projects-section";

interface TreasureChestProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export const TreasureChest = ({ project, onOpen }: TreasureChestProps) => {
  return (
    <div className="relative w-48 h-48 bg-stone-700 border-4 border-stone-800 rounded-lg shadow-xl flex flex-col items-center justify-center p-4 animate-pulse-slow">
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-stone-600 rounded-t-md border-b-4 border-stone-800 flex items-center justify-center">
        <Gem className="w-8 h-8 text-yellow-300 animate-spin-slow" />
      </div>
      <div className="mt-12 text-center text-white font-bold text-lg">{project.title}</div>
      <Button
        onClick={() => onOpen(project)}
        className="absolute bottom-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-1 px-3 rounded-full shadow-md text-sm"
      >
        Open
      </Button>
    </div>
  );
};