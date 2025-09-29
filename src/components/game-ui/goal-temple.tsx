import React from "react";
import { Trophy } from "lucide-react";

export const GoalTemple = () => {
  return (
    <div className="relative w-80 h-64 bg-gradient-to-t from-yellow-700 to-yellow-500 border-8 border-yellow-900 rounded-t-full shadow-2xl flex flex-col items-center justify-center animate-pulse-slow">
      <div className="absolute top-0 w-full h-1/3 bg-yellow-600 rounded-t-full border-b-4 border-yellow-900"></div>
      <Trophy className="w-24 h-24 text-white z-10 animate-bounce-slow" />
      <span className="text-white text-2xl font-bold mt-4 z-10">Goal Reached!</span>
    </div>
  );
};