import React from 'react';
import ProjectCard from './ProjectCard';
import projectsMap from '../projectMap';

const ProjectList: React.FC = () => {
  return (
    <section className="bg-yellow-200 w-full md:h-screen lg:h-full">
      <div className="px-5 md:px-24 2xl:p-32 h-full py-20">
        <h2 className="text-4xl font-display font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projectsMap.map(project=> (
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