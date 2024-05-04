import React from 'react';
import { Info } from '@phosphor-icons/react';

interface FunFactProps {
  fact: string;
}

const FunFact: React.FC<FunFactProps> = ({fact}) => {
  return (
    <section className="bg-teal-200 text-primary w-full md:h-screen lg:h-full">
        <div className="px-5 md:px-24 h-full py-20">
          <h2 className="text-4xl font-bold mb-8">Fun Fact</h2>
          <div className="grid grid-cols-1 gap-8">
          <article className="bg-secondary text-primary p-6 border-2 border-black rounded-md">
                <Info size={48} weight="fill" className="mb-4" />
                <blockquote>
                    <p className="text-lg mb-4">{fact}</p>
                </blockquote>
            </article>
          </div>
        </div>
    </section>
  );
};

export default FunFact;