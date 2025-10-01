"use client";

import React from "react";
import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface PathDecorationProps {
  position: "left" | "right";
  delay?: number;
}

export const PathDecoration = ({ position, delay = 0 }: PathDecorationProps) => {
  const baseClasses = "absolute text-green-600 dark:text-green-700 opacity-50 animate-float";
  const sizeClasses = "w-8 h-8 md:w-10 md:h-10";

  const positionClasses =
    position === "left"
      ? "left-4 md:left-8 -bottom-4 rotate-12"
      : "right-4 md:right-8 -bottom-4 -rotate-12";

  return (
    <div
      className={cn(baseClasses, sizeClasses, positionClasses)}
      style={{ animationDelay: `${delay}s` }}
    >
      <Leaf />
    </div>
  );
};