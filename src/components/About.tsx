import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary to-secondary rounded-lg p-8 shadow-lg hidden md:block">
              <p className="text-4xl font-bold text-white">10+</p>
              <p className="text-white/90">Years of Excellence</p>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Our Story
            </p>
            <p className="mt-4 text-lg text-gray-300">
              Founded in 2013, Byte Foundry has grown from a small startup to a leading technology company. 
              We're passionate about creating innovative solutions that help businesses thrive in the 
              digital age. Our team of experts combines technical expertise with strategic thinking to 
              deliver exceptional results for our clients.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white">Why Choose Us</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                  <span className="text-gray-300">Expert team with diverse skills and experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                  <span className="text-gray-300">Tailored solutions designed for your specific needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                  <span className="text-gray-300">Commitment to quality and client satisfaction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                  <span className="text-gray-300">Innovative approach to problem-solving</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
