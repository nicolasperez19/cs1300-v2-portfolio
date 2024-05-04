import { Trophy } from '@phosphor-icons/react';
import React from 'react';
import CustomLink from './CustomLink';

interface ProjectCardProps {
  title: string;
  organization: string;
  description: string;
  slug: string;
  image: string;
  isAwardWinning?: boolean;
  tag: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, organization, description, slug, image, isAwardWinning=false, tag }) => {
  return (
    <CustomLink to={`/cs1300-v2-portfolio/projects/${slug}`} className="block bg-white border-2 border-black rounded-md hover:shadow-neo">
      <article className="w-full h-full">
        <div className='relative'>
          <figure className='w-full h-1/3 border-black border-b-2'>
            <img src={`/cs1300-v2-portfolio/assets/${image}`} alt={title} className="w-full h-full aspect-video object-cover" />
          </figure>
          {isAwardWinning && (
            <div className="absolute top-2 left-2 border-2 border-black bg-yellow-200 text-primary rounded-full p-2">
              <Trophy size={24} weight="fill" />
            </div>
          )}
        </div>
      <div className="p-4 w-full h-full">
        <span className="inline-block bg-yellow-200 border-2 border-black text-xs font-display px-2 py-1 rounded-full mb-6">{tag}</span>
        <p className='text-xs uppercase mb-2'>{organization}</p>
        <h3 className="text-xl font-display font-bold mb-2">{title}</h3>
        <p className='mb-4'>{description}</p>

        <strong>Read More</strong>
      </div>
      </article>
    </CustomLink>
  );
};

export default ProjectCard;