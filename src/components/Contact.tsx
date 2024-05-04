import { CalendarCheck } from '@phosphor-icons/react';
import React from 'react';
import CustomLink from './CustomLink';

const Contact: React.FC = () => {
  return (
    <section className='bg-violet-100 w-full md:h-screen lg:h-full'>
      <div className='px-5 md:px-24 2xl:p-32 h-full py-20'>
        <h2 className="text-4xl font-display font-bold mb-8">Contact Me</h2>
        <p className="mb-4">To ensure that we can have a focused and productive discussion about your software development needs, please book an appointment through my calendar.</p>
        <p className="mb-8">It allows us to find the optimal time to connect without the delays and inefficiencies often associated with email or phone calls.</p>
        <CustomLink
          to="https://calendly.com/nico_perez/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-yellow-200 hover:bg-yellow-300 text-primary font-display px-8 py-4 rounded-full border-2 border-black hover:shadow-neo text-lg md:text-xl trext-center mb-8"
        >
          <CalendarCheck size={24} weight="fill" className="mr-2" />
          Book Appointment
        </CustomLink>
        <p>Alternatively, you can still reach me at:</p>
        <address className="not-italic pl-6 mb-4">
          Email: <CustomLink to="mailto:@nicolasperezgraham@gmail.com">nicolasperezgraham@gmail.com</CustomLink><br className="mb-2"/>
          Phone: <CustomLink to="tel:+1404-308-7580">404-308-7580</CustomLink>
        </address>
        <p>You can also follow me on:</p>
        <ul className="list-disc pl-6">
          <li>GitHub: <CustomLink to="https://github.com/nicolasperez19">nicolasperez19</CustomLink></li>
          <li>LinkedIn: <CustomLink to="https://www.linkedin.com/in/nicolás-pérez-5910711b2">Nico Perez</CustomLink></li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;