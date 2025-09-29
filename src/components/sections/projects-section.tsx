import React from "react";
import { TreasureChest } from "../game-ui/treasure-chest";
import { ProjectDetailsDialog } from "../game-ui/project-details-dialog";
import { toast } from "sonner";

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
    title: "Ancient Scroll Decoder",
    description: "A web application that deciphers ancient texts using advanced algorithms. Built with React and Node.js.",
    imageUrl: "/file.svg", // Placeholder image
    link: "https://example.com/project1",
  },
  {
    id: "proj2",
    title: "Jungle Explorer Map",
    description: "An interactive map tool for navigating complex jungle terrains. Features real-time tracking and pathfinding.",
    imageUrl: "/globe.svg", // Placeholder image
    link: "https://example.com/project2",
  },
  // Add more projects here
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    toast.info(`Opening ${project.title}...`);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full p-4">
      <h2 className="text-4xl font-bold text-yellow-300 drop-shadow-lg mb-8">Projects: Unearth the Treasures!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project) => (
          <TreasureChest key={project.id} project={project} onOpen={handleOpenProject} />
        ))}
      </div>
      {selectedProject && (
        <ProjectDetailsDialog
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};