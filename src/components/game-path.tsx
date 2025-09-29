import React from "react";
import { cn } from "@/lib/utils";

interface GamePathProps {
  pathOffset: number;
}

export const GamePath = ({ pathOffset }: GamePathProps) => {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-gray-800 to-gray-700 border-t-8 border-gray-900 transition-transform duration-700 ease-in-out"
      style={{ transform: `translateY(${pathOffset}px)` }}
    >
      {/* Path texture / details */}
      {/* Removed moving background image to prevent blending */}
    </div>
  );
};