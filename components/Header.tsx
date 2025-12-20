
import React, { useState } from 'react';
import { NavLink } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { projects } from './Projects';

interface HeaderProps {
  onNavigate: (index: number) => void;
  sectionIndices: { [key: string]: number };
  currentPage: number;
}

const navLinks: NavLink[] = [
  { label: { en: 'Services', ru: 'Услуги' }, href: '#services', key: 'services' },
  { label: { en: 'Work', ru: 'Портфолио' }, href: '#work', key: 'work' },
  { label: { en: 'About', ru: 'Обо мне' }, href: '#about', key: 'about' },
  { label: { en: 'Contact', ru: 'Контакты' }, href: '#contact', key: 'contact' },
];

const Header: React.FC<HeaderProps> = ({ onNavigate, sectionIndices, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, key: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (sectionIndices[key] !== undefined) {
      onNavigate(sectionIndices[key]);
    } else if (key === 'home') {
      onNavigate(0);
    }
  };

  // Determine text color based on page index
  // 0: Hero (Light), 1: Services (Light), About (Light)
  const aboutIndex = 3 + projects.length; // Hero(0) + Services(1) + Intro(1) + Projects
  const isLightPage = [0, 1, aboutIndex].includes(currentPage);
  
  // Use explicit colors instead of mix-blend-difference for better control
  const textColorClass = isLightPage ? 'text-black' : 'text-white';
  const borderColorClass = isLightPage ? 'border-black/30' : 'border-white/30';

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 pointer-events-none transition-colors duration-500">
      <nav className="max-w-[1920px] mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className={`w-full flex justify-between items-center pointer-events-auto relative ${textColorClass} transition-colors duration-500`}>
          <div className="flex items-baseline gap-2">
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, 'home')} 
              className="font-bold text-xl md:text-2xl tracking-tight hover:opacity-80 transition-opacity"
            >
              Igor Petrov
            </a>
            <span className="text-xs font-mono opacity-70 hidden sm:inline-block">/ WP & REACT DEV</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <ul className="flex gap-8 lg:gap-12">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.key)}
                    className="text-sm font-medium hover:opacity-70 transition-opacity cursor-pointer uppercase tracking-wider"
                  >
                    {language === 'en' ? link.label.en : link.label.ru}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Lang Switcher Desktop */}
            <div className={`flex gap-2 text-sm font-bold border-l pl-6 ${borderColorClass} transition-colors duration-500`}>
              <button 
                onClick={() => setLanguage('en')}
                className={`transition-opacity hover:opacity-100 ${language === 'en' ? 'opacity-100' : 'opacity-40'}`}
              >
                EN
              </button>
              <span className="opacity-40">/</span>
              <button 
                onClick={() => setLanguage('ru')}
                className={`transition-opacity hover:opacity-100 ${language === 'ru' ? 'opacity-100' : 'opacity-40'}`}
              >
                RU
              </button>
            </div>
          </div>

          {/* Mobile Right Side (Lang + Burger) */}
          <div className="flex items-center gap-6 md:hidden">
             {/* Lang Switcher Mobile */}
             <div className="flex gap-2 text-xs font-bold">
              <button 
                onClick={() => setLanguage('en')}
                className={`${language === 'en' ? 'opacity-100 underline' : 'opacity-50'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('ru')}
                className={`${language === 'ru' ? 'opacity-100 underline' : 'opacity-50'}`}
              >
                RU
              </button>
            </div>

            {/* Mobile Burger */}
            <button
              className="flex flex-col justify-center gap-1.5 w-8 h-8 focus:outline-none"
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
              key={link.key}
              href={link.href}
              className="text-3xl font-light hover:text-gray-400 transition-colors uppercase"
              onClick={(e) => handleNavClick(e, link.key)}
            >
              {language === 'en' ? link.label.en : link.label.ru}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
