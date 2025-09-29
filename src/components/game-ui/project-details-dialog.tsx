import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Project } from "../sections/projects-section";

interface ProjectDetailsDialogProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailsDialog = ({ project, isOpen, onClose }: ProjectDetailsDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white border-yellow-400">
        <DialogHeader>
          <DialogTitle className="text-yellow-300 text-2xl">{project.title}</DialogTitle>
          <DialogDescription className="text-gray-300">
            Explore the details of this ancient discovery.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex justify-center">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={200}
              height={200}
              className="rounded-md object-cover"
            />
          </div>
          <p className="text-gray-200 text-center">{project.description}</p>
          <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};