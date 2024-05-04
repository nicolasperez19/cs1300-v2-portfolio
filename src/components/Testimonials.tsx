import React from 'react';
import { ChatCenteredText } from '@phosphor-icons/react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Young minds like Nico\'s improve our communities and ultimately create positive change in our great nation.',
    author: 'Honorable John Lewis',
    position: 'Civil Rights Hero, Late U.S Congressman',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/John_Lewis_1964-04-16_%28cropped%29.jpg/220px-John_Lewis_1964-04-16_%28cropped%29.jpg",
  },
//   {
//     id: 2,
//     quote: 'I had the pleasure of working with John on a complex project. His dedication, attention to detail, and collaborative spirit made the project a success. John is not only a skilled developer but also a great person to work with.',
//     author: 'Michael Johnson',
//     position: 'Project Manager at ABC Corporation',
//     image: "https://placehold.co/200"
//   },
//   {
//     id: 3,
//     quote: 'John is a true professional. His passion for software development is evident in his work. He is always eager to learn and stay up-to-date with the latest technologies. John is a reliable and valuable team member.',
//     author: 'Emily Davis',
//     position: 'CTO at Tech Startup',
//     image: "https://placehold.co/200"
//   },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-teal-200 text-primary w-full md:h-screen lg:h-full">
        <div className="px-5 md:px-24 h-full py-20">
          <h2 className="text-4xl font-display font-bold mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 gap-8">
          {testimonials.map((testimonial) => (
              <article key={testimonial.id} className="bg-secondary text-primary p-6 border-2 border-black rounded-md">
                  <ChatCenteredText size={48} weight="fill" className="mb-4" />
                  <blockquote>
                      <q className="text-lg mb-4">{testimonial.quote}</q>
                      <div className="flex flex-row justify-start items-center gap-4">
                          <img className="w-16 h-16 object-cover border-2 border-black rounded-full" src={testimonial.image} />
                          <footer>
                              <p className="font-bold">- {testimonial.author}</p>
                              <p className="text-xs">{testimonial.position}</p>
                          </footer>
                      </div>
                  </blockquote>
              </article>
          ))}
          </div>
        </div>
    </section>
  );
};

export default Testimonials;