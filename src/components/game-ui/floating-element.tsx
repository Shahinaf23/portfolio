"use client";

import React from "react";
import { Icon as LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
  // icon should be a React component (an SVG component from lucide-react)
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  size?: string; // e.g., "w-10 h-10"
  color?: string; // e.g., "text-green-400"
  delay?: number; // animation delay in seconds
  positionClasses: string; // Tailwind classes for absolute positioning (e.g., "top-10 left-20")
  animation?: "float" | "pulse-slow" | "spin-slow";
}

export const FloatingElement = ({
  icon: Icon,
  className,
  size = "w-12 h-12",
  color = "text-green-500",
  delay = 0,
  positionClasses,
  animation = "float",
}: FloatingElementProps) => {
  const animationClass = `animate-${animation}`;

  return (
    <div
      className={cn(
        "absolute opacity-30",
        size,
        color,
        positionClasses,
        animationClass,
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <Icon className="w-full h-full" />
    </div>
  );
};