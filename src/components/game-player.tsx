import React from "react";
import { PersonStanding } from "lucide-react";

export const GamePlayer = () => {
  return (
    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
      <PersonStanding className="w-16 h-16 text-yellow-200 animate-bounce-slow" />
      <div className="w-10 h-2 bg-gray-800 rounded-full mt-2 opacity-70"></div> {/* Shadow */}
    </div>
  );
};