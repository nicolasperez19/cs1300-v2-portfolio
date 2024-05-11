import React from "react";
import { useParams } from "react-router-dom";
import Contact from "@/components/Contact";
import ProjectCard from "@/components/ProjectCard";
import projectsMap from "@/projectMap";
import BuyMeCoffee from "@/components/BuyMeCoffee";
import ProjectArticle from "@/components/ProjectArticle";
import Hero from "@/components/Hero";
import { getImageUrl } from "@/utils/utils";

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = projectsMap.find((p) => p.attributes.slug === slug);

  const otherProjects = projectsMap
    .filter((p) => p.attributes.slug !== slug)
    .slice(0, 3);

  console.log(getImageUrl(project?.attributes.imageMobile));

  return (
    <>
      {project ? (
        <>
          <Hero
            title={project.attributes.title}
            subtitle={project.attributes.organization}
            imageMobile={project.attributes.imageMobile}
            imageDesktop={project.attributes.imageDesktop}
          />
          <section className="w-full bg-lime-100 md:h-screen lg:h-full">
            <article className="h-full px-5 py-20 md:px-24 2xl:p-32">
              <ProjectArticle>{project.markdown}</ProjectArticle>
            </article>
          </section>
        </>
      ) : (
        <section className="w-full bg-lime-100 md:h-screen lg:h-full">
          <article className="h-full px-5 py-20 md:px-24 2xl:p-32">
            <h1 className="mb-4 text-5xl font-bold md:text-6xl">
              Project not found.
            </h1>
          </article>
        </section>
      )}
      {project && (
        <>
          {/* <FunFact fact="I made this entire website using one arm!" /> */}
          <section className="w-full bg-yellow-200 md:h-screen lg:h-full">
            <div className="h-full px-5 py-20 md:px-24 2xl:p-32">
              <h2 className="mb-8 font-display text-4xl font-bold">
                Other Projects You'd Like
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
          <BuyMeCoffee />
          <Contact />
        </>
      )}
    </>
  );
};

export default ProjectPage;
