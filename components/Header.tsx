
import React, { useState } from 'react';
import { NavLink } from '../types';

interface HeaderProps {
  onNavigate: (index: number) => void;
  // Map simplified section names to page indices
  sectionIndices: { [key: string]: number };
}

const navLinks: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC<HeaderProps> = ({ onNavigate, sectionIndices }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Normalize label to match keys in sectionIndices (e.g., 'Work' -> 'work')
    const key = label.toLowerCase();
    if (sectionIndices[key] !== undefined) {
      onNavigate(sectionIndices[key]);
    } else if (label === 'Home') {
      onNavigate(0);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 pointer-events-none">
      <nav className="max-w-[1920px] mx-auto flex justify-between items-center">
        
        {/* Visible Content Wrapper */}
        <div className="w-full flex justify-between items-center mix-blend-difference text-white pointer-events-auto relative">
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, 'Home')} 
            className="font-bold text-xl md:text-2xl tracking-tight hover:opacity-80 transition-opacity"
          >
            Alex Lavru
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.label)}
                  className="text-sm font-medium hover:opacity-70 transition-opacity cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Burger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-full h-0.5 bg-current transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-current transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-current transition-transform duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white text-black flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-in-out md:hidden pointer-events-auto z-50 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button 
            className="absolute top-6 right-6 p-4"
            onClick={toggleMenu}
          >
            ✕
          </button>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-3xl font-light hover:text-gray-400 transition-colors"
              onClick={(e) => handleNavClick(e, link.label)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
