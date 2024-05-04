import React from 'react';
import Section from './Section';
import { CalendarCheck } from '@phosphor-icons/react';
import CustomLink from './CustomLink';

const AboutMe: React.FC = () => {
  return (
    <section className="bg-lime-100 w-full md:h-screen lg:h-full">
      <div className="px-5 md:px-24 2xl:p-32 h-full py-20">
        <Section title="About Me" image="images/home/about_me.png">
          <p className="mb-4">
            I'm a senior at Brown University studying Computer Science, focusing on software and design.
          </p>
          <p className="mb-4">My passion lies with frontend development, web/mobile applications, and UI/UX development.</p>
          <p className="mb-4">In the past I've built a Congressional award-winning soccer website, a mobile pharmacy app in West Africa.</p>
          <p className="mb-4">Lately I've been tinkering with AI and machine learning.</p>
          <p>Outside of coding, you'll catch me:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>playing soccer</li>
            <li>drawing palm trees outside in the park</li>
            <li>dancing salsa</li>
          </ul>
          <p className="mb-8">Why be boring, when you can be fun!</p>
          <CustomLink
            to="https://calendly.com/nico_perez/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-yellow-200 hover:bg-yellow-300 text-primary font-display px-8 py-4 rounded-full border-2 border-black hover:shadow-neo text-lg md:text-xl trext-center"
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