import React from "react";
import Section from "./Section";
import { CalendarCheck } from "@phosphor-icons/react";
import CustomLink from "./CustomLink";

const AboutMe: React.FC = () => {
  return (
    <section className="w-full bg-lime-100 md:h-screen lg:h-full">
      <div className="h-full px-5 py-20 md:px-24 2xl:p-32">
        <Section title="About Me" image="home/about_me.webp">
          <p className="mb-4">
            I'm a senior at Brown University studying Computer Science, focusing
            on software and design.
          </p>
          <p className="mb-4">
            My passion lies with frontend development, web/mobile applications,
            and UI/UX development.
          </p>
          <p className="mb-4">
            In the past I've built a Congressional award-winning soccer website,
            a mobile pharmacy app in West Africa.
          </p>
          <p className="mb-4">
            Lately I've been tinkering with AI and machine learning.
          </p>
          <p>Outside of coding, you'll catch me:</p>
          <ul className="mb-4 list-image-square pl-6">
            <li>playing soccer</li>
            <li>drawing palm trees outside in the park</li>
            <li>dancing salsa</li>
          </ul>
          <p className="mb-8">Why be boring, when you can be fun!</p>
          <CustomLink
            to="https://calendly.com/nico_perez/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="trext-center inline-flex rounded-full border-2 border-black bg-yellow-200 px-8 py-4 font-display text-lg text-primary hover:bg-yellow-300 hover:shadow-neo md:text-xl"
          >
            <CalendarCheck size={24} weight="fill" className="mr-2" />
            Get in Touch
          </CustomLink>
        </Section>
      </div>
    </section>
  );
};

export default AboutMe;
