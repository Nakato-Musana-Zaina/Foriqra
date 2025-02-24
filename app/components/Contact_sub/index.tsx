'use client'

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Link from 'next/link';

const ContactPages = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessageSent(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-[#1A365D] sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            We're here to help. Reach out through any of the options below, or send us a message!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Form Section */}
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-6">Send Us a Message</h3>
            
            {messageSent ? (
              <div className="bg-green-50 p-4 rounded-md">
                <p className="text-green-600">Your message has been sent! Thank you.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-[#168763] text-white rounded-md hover:bg-[#00a36c] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#00a36c] focus:ring-offset-2"
                >
                  <Send className="w-5 h-5 mr-2" /> Send Message
                </button>
              </form>
            )}
          </div>
          
          {/* Info Section */}
          <div className="bg-[#1A365D] p-8 relative">
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#D4AF37]" />
            
            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold text-[#FFFFFF] mb-8">Contact Information</h2>
              
              <div className="rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-[#D4AF37]" />
                  <div>
                    <span className="font-medium text-[#FFFFFF] ">Call Us</span>
                    <p className="text-[#FFFFFF]">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              
              <div className=" rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-[#D4AF37]" />
                  <div>
                    <span className="font-medium text-[#FFFFFF]">Email Us</span>
                    <p className="text-[#FFFFFF]">
                      <a href="mailto:contact@example.com" className="hover:text-[#FFFFFF]">
                        contact@example.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-[#D4AF37]" />
                  <div>
                    <span className="font-medium text-[#FFFFFF]">Location</span>
                    <p className="text-[#FFFFFF]">123 Business Ave,<br/>San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div className=" rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-[#D4AF37]" />
                  <div>
                    <span className="font-medium text-[#FFFFFF]">Office Hours</span>
                    <p className="text-[#FFFFFF]">Mon-Fri: 9am - 5pm (PST)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 right-8 flex space-x-3">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
              <div className="w-2 h-2 bg-[#168763] rounded-full" />
              <div className="w-2 h-2 bg-[#168763] rounded-full" />
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/contact_us" passHref>
            <button className="inline-flex items-center px-6 py-3 bg-[#168763] text-white rounded-md hover:bg-[#00a36c] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#00a36c] focus:ring-offset-2">
              More Contact Info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPages;













