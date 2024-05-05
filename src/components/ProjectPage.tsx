import React from 'react';
import { useParams } from 'react-router-dom';
import Contact from './Contact';
import ProjectCard from './ProjectCard';
import projectsMap from '../projectMap';
import BuyMeCoffee from './BuyMeCoffee';
import ProjectArticle from './ProjectArticle';
import Hero from './Hero';
import BibTex from './BibTex';

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = projectsMap.find((p) => p.attributes.slug === slug);

  const otherProjects = projectsMap.filter((p) => p.attributes.slug !== slug).slice(0, 3);

  
  console.log(typeof project?.attributes.imageMobile);

  return (
    <>
          {project ? (
            <>
              <Hero title={project.attributes.title} subtitle={project.attributes.organization} imageMobile={project.attributes.imageMobile} imageDesktop={project.attributes.imageDesktop} />
              <section className="bg-lime-100 w-full md:h-screen lg:h-full">
                <article className='px-5 md:px-24 2xl:p-32 h-full py-20'>
                  <ProjectArticle>
                    {project.markdown}
                  </ProjectArticle>
                </article>
              </section>
            </>
            ) : (
              <section className="bg-lime-100 w-full md:h-screen lg:h-full">
                <article className='px-5 md:px-24 2xl:p-32 h-full py-20'>
                  <h1 className="text-5xl md:text-6xl font-bold mb-4">Project not found.</h1>
                </article>
              </section>
            )
          } 
      {project && (
        <>
          {/* <FunFact fact="I made this entire website using one arm!" /> */}
          <section className="bg-yellow-200 w-full md:h-screen lg:h-full">
            <div className='px-5 md:px-24 2xl:p-32 h-full py-20'>
            <h2 className="text-4xl font-display font-bold mb-8">Other Projects You'd Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherProjects.map((project) => (
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
          <BibTex title={project.attributes.title} slug={project.attributes.slug} year={2024} />
          <BuyMeCoffee />
          <Contact />
        </>
      )}
    </>
  );
};

export default ProjectPage;