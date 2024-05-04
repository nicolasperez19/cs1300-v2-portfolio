import React from 'react';
import { Coffee } from '@phosphor-icons/react';
import CustomLink from './CustomLink';

const BuyMeCoffee: React.FC = () => {
  return (
    <section className="bg-lime-100 text-primary w-full md:h-screen lg:h-full">
      <div className='px-5 md:px-24 2xl:p-32 h-full py-20'>
        <h2 className="text-4xl font-display font-bold mb-8">Impressed by My Work?</h2>
        <p className="mb-4">If you find my projects and skills impressive, consider supporting me by buying me a coffee.</p> 
        <p className="mb-8">Your support means a lot and helps me continue creating amazing things!</p>
        <CustomLink
          to="https://buymeacoffee.com/nico_perez"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-yellow-200 hover:bg-yellow-300 text-primary font-display px-8 py-4 rounded-full border-2 border-black hover:shadow-neo text-lg md:text-xl tracking-wide text-center"
        >
            <Coffee size={24} weight="fill" className="mr-2" />
            Buy Me a Coffee
        </CustomLink>
      </div>
    </section>
  );
};

export default BuyMeCoffee;