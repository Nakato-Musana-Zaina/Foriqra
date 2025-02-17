
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 flex justify-between items-center text-left hover:text-[#008080]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const ContactPage: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
    },
    {
      question: "Pulvinar sapien massa scelerisq?",
      answer: "Pulvinar sapien massa scelerisque purus. Odio facilisis mauris sit amet massa vitae tortor condimentum."
    },
    {
      question: "Phasellus egestas tellus rutrum?",
      answer: "Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi."
    },
    {
      question: "Lorem eget dolor velit porta?",
      answer: "Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Sit amet consectetur adipiscing elit."
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Background accent */}
      <div className="relative h-[33vh] w-full overflow-hidden">
          <Image
            src="/images/service-background.jpg" // Replace with your image path
            alt="Service Background"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div> {/* Optional: Darken image */}
        </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold mb-5 text-[#1A365D] mt-4 font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Get in touch with our team for any questions or inquiries. We're here to help and will respond as soon as possible.</p>
        </div>

        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border-b-2 border-gray-200 focus:border-[#008080] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border-b-2 border-gray-200 focus:border-[#008080] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border-b-2 border-gray-200 focus:border-[#008080] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-3 border-b-2 border-gray-200 focus:border-[#008080] focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#1A365D] text-white rounded-lg hover:bg-[#008080] transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#D4AF37]/10 p-3 rounded-lg">
                  <Phone className="text-[#008080] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Phone Number</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">Mon-Fri from 8am to 5pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#D4AF37]/10 p-3 rounded-lg">
                  <Mail className="text-[#008080] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Email Address</h3>
                  <p className="text-gray-600">contact@example.com</p>
                  <p className="text-gray-600">support@example.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#D4AF37]/10 p-3 rounded-lg">
                  <MapPin className="text-[#008080] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Office Location</h3>
                  <p className="text-gray-600">123 Business Avenue</p>
                  <p className="text-gray-600">San Francisco, CA 94110</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#D4AF37]/10 p-3 rounded-lg">
                  <MessageCircle className="text-[#008080] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Live Chat</h3>
                  <p className="text-gray-600">Chat with our support team</p>
                  <p className="text-gray-600">24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>


         {/* Map Section */}
         <div className="max-w-3xl mx-auto mb-24">
              <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/api/placeholder/800/400"
                  alt="Map location"
                  className="w-full h-full object-cover"
                />
              </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-2">Frequently asked questions</h2>
          <p className="text-gray-600 mb-8">Find answers to common questions about our services and support.</p>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#1A365D] text-white py-16 px-4 rounded-lg mb-24">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their business needs.
          </p>
          <button className="px-8 py-3 bg-[#008080] hover:bg-[#006666] rounded-lg transition-colors">
            Get Started Now
          </button>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;