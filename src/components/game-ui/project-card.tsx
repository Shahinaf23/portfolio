"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Project } from "../sections/projects-section";
import { VideoDialog } from "./video-dialog"; // Import the new VideoDialog

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);

  const handleViewProjectClick = () => {
    if (project.videoUrl) {
      setIsVideoDialogOpen(true);
    } else {
      // For external links, the Button's asChild will handle navigation
    }
  };

  return (
    <>
      <div className="w-full max-w-sm bg-gray-900 p-6 rounded-lg shadow-xl flex flex-col items-center text-white animate-fade-in h-full">
        <div className="mb-4 w-full flex justify-center">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={120}
            height={120}
            className="rounded-md object-cover border-2 border-yellow-400 p-2 bg-gray-800"
          />
        </div>

        <h3 className="text-2xl font-bold mb-2 text-yellow-300 text-center">{project.title}</h3>
        <p className="text-gray-300 text-center mb-6 flex-grow">{project.description}</p>

        {project.videoUrl ? (
          <Button
            onClick={handleViewProjectClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold"
          >
            View Project
          </Button>
        ) : (
          <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white font-bold">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </Button>
        )}
      </div>

      {project.videoUrl && (
        <VideoDialog
          isOpen={isVideoDialogOpen}
          onClose={() => setIsVideoDialogOpen(false)}
          videoUrl={project.videoUrl}
          title={project.title}
          description={project.description}
        />
      )}
    </>
  );
};