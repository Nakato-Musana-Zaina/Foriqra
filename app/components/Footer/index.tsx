import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Rss } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A365D] text-white py-12 ">
      <div className="max-w-8xl mx-auto px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-[#D4AF37] font-bold mb-6 text-lg">Your Logo</h3>
            <div className="mb-6">
              <p className="text-gray-300 text-base">
                We want to help bring success to students all around the world.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300 text-base">
                <Phone className="w-5 h-5 mr-3" />
                <span>+91 999 999 999</span>
              </div>
              <div className="flex items-center text-gray-300 text-base">
                <Mail className="w-5 h-5 mr-3" />
                <span>example@mail.com</span>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Information</h3>
            <ul className="space-y-4 text-base">
              <li><a href="/about" className="text-gray-300 hover:text-[#008080]">About Us</a></li>
              <li><a href="/search" className="text-gray-300 hover:text-[#008080]">More Search</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-[#008080]">Blog</a></li>
              <li><a href="/testimonials" className="text-gray-300 hover:text-[#008080]">Testimonials</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-[#008080]">Events</a></li>
            </ul>
          </div>

          {/* Helpful Links Section */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Helpful Links</h3>
            <ul className="space-y-4 text-base">
              <li><a href="/services" className="text-gray-300 hover:text-[#008080]">Services</a></li>
              <li><a href="/support" className="text-gray-300 hover:text-[#008080]">Supports</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-[#008080]">Terms & Condition</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-[#008080]">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Subscribe More Info</h3>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-3 bg-white text-gray-800 text-base rounded-l focus:outline-none w-full"
              />
              <button className="bg-[#D4AF37] hover:bg-[#008080] px-4 py-3 rounded-r transition-colors">
                <Rss className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & Social Links */}
        <div className="mt-16 pt-6 border-t border-[#FFFFFF] text-center text-sm text-white">
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-4"> {/* Added justify-center and mb-4 */}
            <a href="#" className="bg-[#D4AF37] p-3 rounded-full hover:bg-[#008080] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="bg-[#D4AF37] p-3 rounded-full hover:bg-[#008080] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="bg-[#D4AF37] p-3 rounded-full hover:bg-[#008080] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="bg-[#D4AF37] p-3 rounded-full hover:bg-[#008080] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <p>© 2024 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;