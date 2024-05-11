// Hero.tsx
import { CalendarCheck } from "@phosphor-icons/react";
import React from "react";
import CustomLink from "./CustomLink";

import { getImageUrl } from "@/utils/utils";

interface HeroProps {
  title: string;
  subtitle: string;
  imageMobile: string;
  imageDesktop: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageMobile,
  imageDesktop,
}) => {
  return (
    <section className="h-[calc(100vh-80px)] min-h-screen w-full shrink-0 snap-start snap-always bg-teal-200">
      <picture className="relative h-full w-full object-cover">
        <source media="(min-width: 768px)" srcSet={getImageUrl(imageDesktop)} />
        <img src={getImageUrl(imageMobile)} alt="IfItDoesntMatchAnyMedia" />
      </picture>
      <div className="absolute left-1/3 top-1/3 -translate-x-1/3 -translate-y-1/3 transform">
        <h1 className="mb-4 font-display text-5xl font-bold md:text-8xl">
          {title}
        </h1>
        <p className="mb-8 text-2xl md:text-3xl">{subtitle}</p>
        <CustomLink
          to="https://calendly.com/nico_perez/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full border-2 border-black bg-yellow-200 px-8 py-4 text-center font-display text-lg tracking-wide text-primary hover:bg-yellow-300 hover:shadow-neo md:text-xl"
        >
          <CalendarCheck size={24} weight="fill" className="mr-2" />
          Get in Touch
        </CustomLink>
      </div>
    </section>
  );
};

export default Hero;
