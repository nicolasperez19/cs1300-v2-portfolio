import { Trophy } from "@phosphor-icons/react";
import React from "react";
import CustomLink from "./CustomLink";

import { getImageUrl } from "@/utils/utils";

interface ProjectCardProps {
  title: string;
  organization: string;
  description: string;
  slug: string;
  image: string;
  isAwardWinning?: boolean;
  tag: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  organization,
  description,
  slug,
  image,
  isAwardWinning = false,
  tag,
}) => {
  return (
    <CustomLink
      to={`/projects/${slug}`}
      className="block rounded-md border-2 border-black bg-white hover:shadow-neo"
    >
      <article className="h-full w-full">
        <div className="relative aspect-video">
          <img
            src={getImageUrl(image)}
            alt={title}
            className="h-full w-full border-b-2 border-black object-cover"
          />
          {isAwardWinning && (
            <div className="absolute left-2 top-2 rounded-full border-2 border-black bg-yellow-200 p-2 text-primary">
              <Trophy size={24} weight="fill" />
            </div>
          )}
        </div>
        <div className="h-full w-full p-4">
          {/* TODO: Make ProjectCard component support multiple tags */}
          <span className="mb-6 inline-block rounded-full border-2 border-black bg-yellow-200 px-2 py-1 font-display text-xs">
            {tag}
          </span>
          <p className="mb-2 text-xs uppercase">{organization}</p>
          <h3 className="mb-2 font-display text-xl font-bold">{title}</h3>
          <p className="mb-4">{description}</p>

          <strong>Read More</strong>
        </div>
      </article>
    </CustomLink>
  );
};

export default ProjectCard;
