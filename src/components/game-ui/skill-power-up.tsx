import React from "react";
import { Icon as LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillPowerUpProps {
  name: string;
  icon: LucideIcon;
  color: string;
  delay?: number;
}

export const SkillPowerUp = ({ name, icon: Icon, color, delay = 0 }: SkillPowerUpProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-4 bg-gray-800 bg-opacity-70 rounded-full shadow-lg border-2 border-yellow-400 animate-float"
      style={{ animationDelay: `${delay}s` }}
    >
      <Icon className={cn("w-12 h-12 mb-2", color)} />
      <span className="text-white text-sm font-medium">{name}</span>
    </div>
  );
};