import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setHidden(isScrollingDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 border-b border-dark-light bg-[#664bd680] transition-transform duration-300 transform w-full ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-white">Byte Foundry</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-primary px-3 py-2 font-medium transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-primary px-3 py-2 font-medium transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-primary px-3 py-2 font-medium transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#team"
              className="text-gray-300 hover:text-primary px-3 py-2 font-medium transition-colors duration-200"
            >
              Team
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-primary px-3 py-2 font-medium transition-colors duration-200"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-lighter">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-gray-300 hover:text-primary px-3 py-2 font-medium">
              Home
            </a>
            <a href="#services" className="block text-gray-300 hover:text-primary px-3 py-2 font-medium">
              Services
            </a>
            <a href="#about" className="block text-gray-300 hover:text-primary px-3 py-2 font-medium">
              About
            </a>
            <a href="#team" className="block text-gray-300 hover:text-primary px-3 py-2 font-medium">
              Team
            </a>
            <a href="#testimonials" className="block text-gray-300 hover:text-primary px-3 py-2 font-medium">
              Testimonials
            </a>
            <a
              href="#contact"
              className="block bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-md font-medium hover:opacity-90 mt-4 mx-3"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
