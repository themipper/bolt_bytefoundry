import React from 'react';
import { Code, LineChart, Lightbulb, Smartphone, Globe, Shield } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with the latest technologies.',
    icon: <Code className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: <Smartphone className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Data Analytics',
    description: 'Turn your data into actionable insights with our analytics solutions.',
    icon: <LineChart className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Digital Strategy',
    description: 'Strategic planning to help your business thrive in the digital landscape.',
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Global Reach',
    description: 'Expand your business globally with our international expertise.',
    icon: <Globe className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Security Solutions',
    description: 'Protect your digital assets with our comprehensive security services.',
    icon: <Shield className="h-10 w-10 text-primary" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            What We Offer
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Comprehensive solutions tailored to meet your business needs
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-dark-light rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-800 hover:border-primary/30"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
