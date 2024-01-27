import React from "react";
import ProjectsCard from "./ProjectsCard";
import { getProjectsData } from "@/app/lib/data";
import { Project } from "@/app/lib/definitions";


export default async function Projects() {
const projectsData=await getProjectsData()
  return (
    <div
      className={`container  flex flex-col items-center justify-start h-auto  my-4 py-12 `}
      id="projects"
    >
      <div className="flex items-center justify-center">
        <div className={`text-3xl md:text-4xl font-bold mb-4 `}>Projects</div>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center">
        {projectsData?.map((project:Project, index:number) => (
          <ProjectsCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

