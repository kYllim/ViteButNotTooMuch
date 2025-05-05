import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { navigation } from '../data/content';

interface NavbarProps {
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/' && (currentPath === '' || currentPath === '#')) {
      return true;
    }
    return href === currentPath;
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-primary-900/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="flex items-center space-x-2 font-bold text-xl"
            aria-label="ViteButNotTooMuch page d'accueil"
          >
            <Zap className={`h-6 w-6 ${scrolled ? 'text-primary-600' : 'text-primary-100'}`} />
            <span className={scrolled ? 'text-primary-600' : 'text-primary-100'}>
              ViteButNotTooMuch
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-medium transition ${
                  isActive(item.href) 
                    ? scrolled ? 'text-primary-600' : 'text-primary-100'
                    : scrolled 
                      ? 'text-gray-700 hover:text-primary-600' 
                      : 'text-primary-200 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-4 py-2 rounded-md font-medium transition ${
                scrolled 
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-white text-primary-900 hover:bg-primary-50'
              }`}
            >
              Démarrer
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className={scrolled ? 'text-gray-900' : 'text-primary-100'} />
            ) : (
              <Menu className={scrolled ? 'text-gray-900' : 'text-primary-100'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg py-4 px-2 absolute left-4 right-4 top-16">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-gray-700 font-medium px-4 py-2 rounded-md ${
                    isActive(item.href) ? 'bg-primary-50 text-primary-600' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-primary-600 text-white px-4 py-2 rounded-md font-medium text-center hover:bg-primary-700"
                onClick={() => setIsOpen(false)}
              >
                Démarrer
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;