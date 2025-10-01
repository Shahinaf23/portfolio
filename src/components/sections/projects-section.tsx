import React from "react";
import { ProjectCard } from "../game-ui/project-card";
import { toast } from "sonner";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  videoUrl?: string; // Added optional videoUrl
}

const projects: Project[] = [
  {
    id: "proj1",
    title: "Document Management System",
    description: "Automated extraction of document variables from 490+ unstructured Excel files using TypeScript-based parsing and regex, building a real-time analytics pipeline that improved project visibility by 60%.",
    imageUrl: "/file.svg",
    link: "https://example.com/project1", // Keep a fallback link
    videoUrl: "/videos/atlas-dms.mp4", // Path to the uploaded video
  },
  {
    id: "proj2",
    title: "Resume Matcher",
    description: "Engineered a full-stack resume-matching platform leveraging NLP and machine learning to automate skill extraction and ranking from PDF resumes, processing 100+ resumes per batch.",
    imageUrl: "/globe.svg",
    link: "https://example.com/project2", // Keep a fallback link
    videoUrl: "/videos/resume-matcher.mp4", // Path to the uploaded video
  },
  {
    id: "proj3",
    title: "Translang",
    description: "It is a lightweight, interactive translation application that enables seamless translation between any two languages. Built with Flask as the backend and Streamlit as the frontend, the app provides a simple yet powerful interface for real-time multilingual communication.",
    imageUrl: "/window.svg",
    link: "https://example.com/project3",
  },
  // Add more projects here
];

export const ProjectsSection = () => {
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