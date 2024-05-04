import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-secondary w-full md:h-screen lg:h-full">
      <div className='px-5 md:px-24 h-full py-20 flex justify-between items-center'>
        <Logo/>
        <p>&copy; {new Date().getFullYear()} Nicolas Perez. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;