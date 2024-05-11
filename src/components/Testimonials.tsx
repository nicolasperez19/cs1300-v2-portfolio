import React from "react";
import { ChatCenteredText } from "@phosphor-icons/react";
import { getImageUrl } from "@/utils/utils";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  image: string;
  alt: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Young minds like Nico's improve our communities and ultimately create positive change in our great nation.",
    author: "Honorable John Lewis",
    position: "Civil Rights Hero, Late U.S Congressman",
    image: "home/john_lewis.jpeg",
    alt: "Young John Lewis",
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
    <section className="w-full bg-teal-200 text-primary md:h-screen lg:h-full">
      <div className="h-full px-5 py-20 md:px-24">
        <h2 className="mb-8 font-display text-4xl font-bold">Testimonials</h2>
        <div className="grid grid-cols-1 gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-md border-2 border-black bg-secondary p-6 text-primary"
            >
              <ChatCenteredText size={48} weight="fill" className="mb-4" />
              <blockquote>
                <q className="mb-4 text-lg">{testimonial.quote}</q>
                <div className="flex flex-row items-center justify-start gap-4">
                  <img
                    className="aspect-square h-16 w-16 rounded-full border-2 border-black object-cover"
                    width={16}
                    height={16}
                    src={getImageUrl(testimonial.image)}
                    alt={testimonial.alt}
                    loading="lazy"
                  />
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
