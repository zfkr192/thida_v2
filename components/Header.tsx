import React, { useState, useEffect } from 'react';
import { NavLink } from '../types';

interface HeaderProps {
  navLinks: NavLink[];
}

export const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      let currentSection = '';
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(s => s);

      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTopOffset = section.offsetTop; // Use offsetTop for more reliable position
          const sectionHeight = section.offsetHeight;
          const windowHeight = window.innerHeight;
          const scrollY = window.scrollY;

          // Check if section is in view
          // Consider a section active if its top is within the top 60% of the viewport 
          // or if more than a small part of it is visible.
          if (rect.top <= windowHeight * 0.6 && rect.bottom >= windowHeight * 0.1) {
             currentSection = `#${section.id}`;
             break; 
          }
        }
      }
      
      if (currentSection) {
        setActiveLink(currentSection);
      } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 150 && navLinks.length > 0) { // Near bottom
         setActiveLink(navLinks[navLinks.length-1]?.href || '');
      } else if (window.scrollY < 200 && navLinks.length > 0) { // Near top
         setActiveLink(navLinks[0]?.href || '');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const logoColor = isScrolled ? 'text-teal-700' : 'text-white md:text-teal-700';
  const navTextColor = isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-gray-100 hover:text-amber-300';
  const activeNavColor = isScrolled ? 'text-teal-700 border-b-2 border-teal-700' : 'text-amber-400 border-b-2 border-amber-400';
  const mobileMenuIconColor = isScrolled ? 'text-gray-700' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-opensans ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#about" className={`text-2xl font-bold font-merriweather ${logoColor}`}>
          Thida
        </a>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-lg font-medium transition-colors pb-1 ${
                activeLink === link.href ? activeNavColor : navTextColor
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`focus:outline-none ${mobileMenuIconColor}`}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-1">
          <nav className="flex flex-col space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeLink === link.href ? 'bg-teal-50 text-teal-700' : 'text-gray-700 hover:bg-teal-50 hover:text-teal-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};