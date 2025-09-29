import React from "react";
import { SkillPowerUp } from "../game-ui/skill-power-up";
import { Code, Layout, Database, Zap, Brain } from "lucide-react";

export const SkillsSection = () => {
  const skills = [
    { name: "Frontend Dev", icon: Code, color: "text-blue-400" },
    { name: "UI/UX Design", icon: Layout, color: "text-purple-400" },
    { name: "Backend Dev", icon: Database, color: "text-green-400" },
    { name: "Performance", icon: Zap, color: "text-red-400" },
    { name: "Problem Solving", icon: Brain, color: "text-yellow-400" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full p-4">
      <h2 className="text-4xl font-bold text-yellow-300 drop-shadow-lg mb-8">Skills: Power-Ups of the Jungle!</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
        {skills.map((skill, index) => (
          <SkillPowerUp key={index} name={skill.name} icon={skill.icon} color={skill.color} delay={index * 0.1} />
        ))}
      </div>
    </div>
  );
};