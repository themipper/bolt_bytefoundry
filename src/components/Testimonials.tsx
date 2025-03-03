import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Working with Byte Foundry transformed our business. Their team delivered a solution that exceeded our expectations and helped us increase our revenue by 40%.",
    author: "Jennifer Lee",
    position: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    rating: 5,
  },
  {
    content: "The team at Byte Foundry is exceptional. They understood our needs perfectly and created a custom solution that streamlined our operations and improved customer satisfaction.",
    author: "Robert Martinez",
    position: "COO, Global Logistics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 5,
  },
  {
    content: "Byte Foundry's data analytics solution provided us with valuable insights that helped us make better business decisions. Their ongoing support has been invaluable.",
    author: "Sophia Kim",
    position: "CTO, DataDrive",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            What Our Clients Say
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Don't just take our word for it — hear from some of our satisfied clients
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark-light rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-800 hover:border-primary/30"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-current" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-700" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
