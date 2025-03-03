import React from 'react';
import { Code2, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-dark text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">Byte Foundry</span>
            </div>
            <p className="text-gray-400 mb-4">
              Innovative solutions for businesses of all sizes. We help transform ideas into reality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors duration-300">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors duration-300">About Us</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-primary transition-colors duration-300">Our Team</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-primary transition-colors duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Data Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Digital Strategy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Security Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary bg-dark-light border border-gray-700 text-white"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-r-md hover:opacity-90 transition-opacity duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Byte Foundry. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Cookie Policy</a>
          </div>
          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 bg-dark-light p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
