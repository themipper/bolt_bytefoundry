import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Get in Touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Have a question or want to work together? Reach out to us.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="bg-dark-light rounded-lg shadow-md p-8 lg:col-span-1 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-white">Our Location</p>
                  <p className="text-gray-400 mt-1">
                    123 Business Avenue<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-gray-400 mt-1">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-gray-400 mt-1">info@bytefoundry.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-lg font-medium text-white mb-4">Business Hours</h4>
              <div className="space-y-2">
                <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-400">Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-light rounded-lg shadow-md p-8 lg:col-span-2 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-md focus:ring-primary focus:border-primary text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-md focus:ring-primary focus:border-primary text-white"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-md focus:ring-primary focus:border-primary text-white"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Project Request">Project Request</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Support">Support</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-md focus:ring-primary focus:border-primary text-white"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-md shadow-md hover:opacity-90 transition duration-300 flex items-center justify-center"
              >
                Send Message <Send className="h-5 w-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
