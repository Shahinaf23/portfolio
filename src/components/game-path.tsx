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
      <div className="absolute inset-0 bg-[url('/window.svg')] bg-repeat-x bg-bottom opacity-20 animate-scroll-path"></div>
      <div className="absolute inset-0 bg-[url('/next.svg')] bg-repeat-x bg-bottom opacity-10 animate-scroll-path-slow"></div>
    </div>
  );
};