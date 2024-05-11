import { List, X } from "@phosphor-icons/react";
import React, { useState } from "react";
import Logo from "./Logo";
import CustomLink from "./CustomLink";

const links = [
  {
    id: 1,
    name: "Projects",
    url: "/cs1300-v2-portfolio/projects",
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/nicolasperez19",
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nicolás-pérez-5910711b2",
  },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="fixed top-0 z-40 h-20 w-full bg-white p-8">
      <div className="m-auto flex h-full w-full items-center justify-between px-5 md:px-24">
        <Logo />
        <nav className="hidden space-x-4 md:flex">
          {links.map((link) => (
            <CustomLink
              key={link.id}
              className="text-primary hover:underline hover:underline-offset-8"
              to={link.url}
            >
              {link.name}
            </CustomLink>
          ))}
        </nav>
        <button
          className="md:hidden"
          aria-label="Open Menu"
          onClick={toggleMenu}
        >
          <List size={24} weight="bold" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col items-center justify-center space-y-4 bg-white text-left">
          <button
            className="absolute right-8 top-8"
            aria-label="Close Menu"
            onClick={toggleMenu}
          >
            <X size={24} weight="bold" />
          </button>
          {links.map((link) => (
            <CustomLink
              key={link.id}
              className="text-2xl hover:underline hover:underline-offset-8"
              to={link.url}
              onClick={toggleMenu}
            >
              {link.name}
            </CustomLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
