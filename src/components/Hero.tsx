// Hero.tsx
import { CalendarCheck } from '@phosphor-icons/react';
import React from 'react';
import CustomLink from './CustomLink';

interface HeroProps {
  title: string;
  subtitle: string;
  imageMobile: string;
  imageDesktop: string;
}

const Hero: React.FC<HeroProps> = ({title, subtitle, imageMobile, imageDesktop}) => {
  console.log(imageMobile, imageDesktop);
  return (
    <section className="w-full h-full snap-start snap-always shrink-0 bg-teal-200">
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <picture className="w-full h-full">
        <source className="object-cover" media="(min-width: 768px)" srcSet={`/cs1300-v2-portfolio/assets/${imageDesktop}`}/>
        <img className="object-cover" src={`/cs1300-v2-portfolio/assets/${imageMobile}`} alt="IfItDoesntMatchAnyMedia"/>
      </picture>
      <div className="absolute top-1/3 left-1/3 transform -translate-x-1/3 -translate-y-1/3">
        <h1 className="text-5xl md:text-8xl font-display font-bold mb-4">
          {title}
        </h1>
        <p className="text-2xl md:text-3xl mb-8">
          {subtitle}
        </p>
        <CustomLink
          to="https://calendly.com/nico_perez/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-yellow-200 hover:bg-yellow-300 text-primary font-display px-8 py-4 rounded-full border-2 border-black hover:shadow-neo text-lg md:text-xl tracking-wide text-center"
        >
          <CalendarCheck size={24} weight="fill" className="mr-2" />
          Get in Touch
        </CustomLink>
      </div>
    </section>
  );
};

export default Hero;