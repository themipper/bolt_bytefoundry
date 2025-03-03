import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-dark py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5"></div>
      
      {/* Animated dots/stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-2 w-2 rounded-full bg-primary opacity-20 top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute h-2 w-2 rounded-full bg-secondary opacity-20 top-3/4 left-1/3 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute h-3 w-3 rounded-full bg-primary opacity-20 top-1/2 left-2/3 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute h-2 w-2 rounded-full bg-secondary opacity-20 top-1/3 left-3/4 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute h-2 w-2 rounded-full bg-primary opacity-20 top-2/3 left-1/5 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center md:text-left md:max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            AI <span className="gradient-text">Agents</span>: Your gateway to <span className="gradient-text">automation</span> and digital transformation. Join the AI <span className="gradient-text">revolution</span>.
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Ready to elevate your business with cutting-edge AI solutions? We leverage the latest tooling and frameworks to deliver custom automation and digital transformation tailored to your unique needs. Contact us today to schedule a consultation and discover how AI agents can drive efficiency and growth for your organization. Start your journey towards digital excellence now!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#services"
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-md shadow-md hover:opacity-90 transition duration-300 text-center"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-gray-700 text-gray-300 font-medium rounded-md hover:border-primary hover:text-primary transition duration-300 flex items-center justify-center gap-2"
            >
              Get in Touch <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
