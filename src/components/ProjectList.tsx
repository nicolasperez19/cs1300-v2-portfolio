import React from "react";
import ProjectCard from "./ProjectCard";
import projectsMap from "@/projectMap";

const ProjectList: React.FC = () => {
  return (
    <section className="w-full bg-yellow-200 md:h-screen lg:h-full">
      <div className="h-full px-5 py-20 md:px-24 2xl:p-32">
        <h2 className="mb-8 font-display text-4xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projectsMap.map((project) => (
            <ProjectCard
              key={project.attributes.slug}
              title={project.attributes.title}
              organization={project.attributes.organization}
              description={project.attributes.description}
              slug={project.attributes.slug}
              image={project.attributes.imagePreview}
              isAwardWinning={project.attributes.isAwardWinning}
              tag={project.attributes.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
