import { List, X } from '@phosphor-icons/react';
import React, { useState } from 'react';
import Logo from './Logo';
import CustomLink from './CustomLink';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="fixed top-0 bg-white w-full h-20 p-8 z-40">
      <div className="w-full h-full m-auto px-5 md:px-24 flex justify-between items-center">
        <Logo/>
        <nav className="hidden md:flex space-x-4">
          <CustomLink className='text-primary hover:underline hover:underline-offset-8' to="/projects">Projects</CustomLink>
          <CustomLink className='text-primary hover:underline hover:underline-offset-8' to="https://github.com/nicolasperez19" target="_blank" rel="noopener noreferrer">Github</CustomLink>
          <CustomLink className='text-primary hover:underline hover:underline-offset-8' to="https://www.linkedin.com/in/nicolás-pérez-5910711b2" target="_blank" rel="noopener noreferrer">LinkedIn</CustomLink>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          <List size={24} weight="bold" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white flex flex-col justify-center items-center text-left space-y-4 z-40">
          <button className="absolute top-8 right-8" onClick={toggleMenu}>
            <X size={24} weight="bold" />
          </button>
          <CustomLink className="text-2xl hover:underline hover:underline-offset-8" to="/projects" onClick={toggleMenu}>Projects</CustomLink>
          <CustomLink className="text-2xl hover:underline hover:underline-offset-8" to="https://github.com/nicolasperez19" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Github</CustomLink>
          <CustomLink className="text-2xl hover:underline hover:underline-offset-8" to="https://www.linkedin.com/in/nicolás-pérez-5910711b2" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>LinkedIn</CustomLink>
        </div>
      )}
    </header>
  );
};

export default Header;