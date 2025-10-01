import React from "react";
import { ProjectCard } from "../game-ui/project-card"; // Import the new ProjectCard
import { toast } from "sonner"; // Keep toast for potential future use, though not directly used here now

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "proj1",
    title: "Document Management System",
    description: "Automated extraction of document variables from 490+ unstructured Excel files using TypeScript-based parsing and regex, building a real-time analytics pipeline that improved project visibility by 60%.",
    imageUrl: "/file.svg", // Placeholder image
    link: "https://example.com/project1",
  },
  {
    id: "proj2",
    title: "Resume Matcher",
    description: "Engineered a full-stack resume-matching platform leveraging NLP and machine learning to automate skill extraction and ranking from PDF resumes, processing 100+ resumes per batch.",
    imageUrl: "/globe.svg", // Placeholder image
    link: "https://example.com/project2",
  },
  {
    id: "proj3",
    title: "Translang",
    description: "A desktop application for exploring mystical phenomena and ancient prophecies. Built with Electron and Python.",
    imageUrl: "/window.svg", // Placeholder image
    link: "https://example.com/project3",
  },
  // Add more projects here
];

export const ProjectsSection = () => {
  // No need for selectedProject state or handleOpenProject as dialog is removed.

  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full p-4">
      <h2 className="text-4xl font-bold text-yellow-300 drop-shadow-lg mb-8">Projects: Unearth the Treasures!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};