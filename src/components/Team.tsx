import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Martin Ibanez y Pomerol',
    role: 'Founder',
    image: 'https://www.martin-ibanez.de/foto.jpg',
    bio: 'With over 20 years of experience in technology and business leadership, Martin founded Byte Foundry with a vision to transform how businesses leverage technology.',
    linkedin: 'https://www.linkedin.com/in/martinibanez/',
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Team</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Meet the Experts
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Talented professionals dedicated to delivering exceptional results
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-dark-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-800 hover:border-primary/30">
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="mt-3 text-gray-400 text-sm">{member.bio}</p>
                <div className="mt-4 flex space-x-3">
                  <a href={member.linkedin} className="text-gray-500 hover:text-primary transition-colors duration-200">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-200">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-200">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
