import React from "react";
import { Button } from "@/components/ui/button";
import { DoorOpen, DoorClosed } from "lucide-react";
import { cn } from "@/lib/utils";

interface TempleGateProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const TempleGate = ({ isOpen, onOpen }: TempleGateProps) => {
  return (
    <div className="relative w-64 h-80 bg-stone-700 border-8 border-stone-900 rounded-lg shadow-2xl flex flex-col items-center justify-center overflow-hidden">
      <div className={cn(
        "absolute inset-0 bg-stone-800 transition-transform duration-700 ease-in-out",
        isOpen ? "translate-y-full" : "translate-y-0"
      )}>
        <div className="flex flex-col items-center justify-center h-full text-white text-2xl font-bold">
          <DoorClosed className="w-16 h-16 mb-4 text-yellow-400" />
          Ancient Temple
        </div>
      </div>
      <div className={cn(
        "absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <DoorOpen className="w-16 h-16 text-green-400 animate-pulse" />
      </div>
      {!isOpen && (
        <Button
          onClick={onOpen}
          className="absolute bottom-8 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-full shadow-lg z-10"
        >
          Open Gate
        </Button>
      )}
    </div>
  );
};