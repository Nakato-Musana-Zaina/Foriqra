'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  ArrowRight,
  Sparkles,
  ExternalLink,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  
  const images = [
    '/image/person1.jpeg',
    '/image/person2.jpeg',
    '/image/person3.jpeg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsImageLoading(true);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const socialIcons = [
    { icon: <Twitter size={24} />, label: 'Twitter', href: '#', color: '#1DA1F2' },
    { icon: <Facebook size={24} />, label: 'Facebook', href: '#', color: '#4267B2' },
    { icon: <Instagram size={24} />, label: 'Instagram', href: '#', color: '#E4405F' },
    { icon: <Linkedin size={24} />, label: 'LinkedIn', href: '#', color: '#0A66C2' }
  ];

  const features = [
    { icon: <CheckCircle size={24} />, label: 'Creative Portfolios', color: '#0C056D', position: 'top-0 -left-32' },
    { icon: <CheckCircle size={24} />, label: 'Easy-to-Use', color: '#008080', position: 'top-0 -right-32' },
    { icon: <CheckCircle size={24} />, label: 'Professional Design', color: '#D4AF37', position: 'bottom-16 -left-32' },
  ];

  return (
    <div className="relative min-h-screen ml-32 bg-white flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Welcome Badge */}
      <div className="absolute top-8 right-8 animate-fade-in">
        <div className="bg-[#D4AF37]/10 rounded-full px-4 py-2 flex items-center gap-2">
          <Sparkles className="text-[#D4AF37] animate-pulse" size={20} />
          <span className="text-[#D4AF37] font-medium">New Features Available!</span>
        </div>
      </div>

      {/* Left Side Social Navigation */}
      <div className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
        {socialIcons.map((item, index) => (
          <div key={index} className="group relative">
            <a
              href={item.href}
              aria-label={`Visit our ${item.label} page`}
              className="p-3 flex items-center justify-center rounded-full bg-white border-2 border-[#708090] 
                       hover:bg-[#708090] hover:text-white transition-all duration-300 
                       hover:scale-110 hover:shadow-lg"
            >
              {item.icon}
            </a>
            <span 
              role="tooltip"
              className="absolute left-14 top-1/2 -translate-y-1/2 bg-[#1A365D] text-white px-3 py-2 
                       rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 
                       translate-x-[-10px] group-hover:translate-x-0 text-sm whitespace-nowrap"
            >
              {item.label}
              <ExternalLink className="inline ml-1" size={12} />
            </span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center w-full md:w-1/2 pr-0 md:pr-8 mt-20 md:mt-0">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full">
            <Sparkles className="text-[#D4AF37]" size={20} />
            <span className="font-medium text-[#D4AF37]">Welcome to</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#1A365D] leading-tight">
            Foriqra
            <span className="block text-[#008080] mt-2 animate-fade-in-up" style={{animationDelay: '200ms'}}>
              Portfolio Platform
            </span>
          </h1>
          
          <p className="text-xl mt-8 text-gray-600 max-w-xl animate-fade-in-up" style={{animationDelay: '400ms'}}>
            Empowering professionals to showcase their talents through innovative digital portfolios. 
            Let us help you present your work in the best way possible.
          </p>
          <Link href="/plans">
          <button 
            className=" left-1/4 mt-14 -translate-x-1/2 bg-[#D4AF37] hover:bg-[#B69330] 
                      text-white px-6 md:px-8 py-3 md:py-4 rounded-lg flex items-center gap-2 
                      transition-all duration-300 hover:scale-105 hover:shadow-lg
                      focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-opacity-50
                      animate-bounce-subtle"
            aria-label="Get Started with Foriqra"
          >
            <span className="font-medium">Get Started Now</span>
            <ArrowRight size={20} className="animate-slide-x" />
          </button>
          </Link>
          
        </div>
      </div>

      {/* Right Side Image with Features */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-[600px] flex justify-center items-center mt-8 md:mt-0">
        {/* Pear-shaped background */}
        
<div className="absolute inset-0 flex justify-center items-center">
  <div className="bg-teal-500 h-[90%] w-[70%] rounded-full [clip-path:polygon(50%_0%,100%_30%,100%_100%,0%_100%,0%_30%)]"></div>
</div>
        
        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] animate-fade-in-up">
          <div className="absolute inset-0 rounded-full 
                        [clip-path:polygon(0%_0%,100%_0%,100%_85%,85%_100%,0%_100%)]
                        animate-rotate-slow" />

          <div className="absolute inset-4 overflow-hidden 
                        [clip-path:polygon(0%_0%,100%_0%,100%_85%,85%_100%,0%_100%)]">
            <Image
              src={images[currentImageIndex]}
              alt="Portfolio Showcase"
              layout="fill"
              objectFit="cover"
              className={`transition-all duration-1000 ${isImageLoading ? 'scale-110 blur-sm' : 'scale-100 blur-0'}`}
              onLoadingComplete={() => setIsImageLoading(false)}
            />
          </div>

          {/* Feature cards positioned around the image */}
          {features.map((feature, index) => (
            <div
              key={index}
              className={`absolute ${feature.position} transition-all duration-500 transform
                        ${index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              <div 
                className="flex items-center p-4 text-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                style={{ backgroundColor: feature.color }}
              >
                <div className="mr-3">{feature.icon}</div>
                <span className="text-lg">{feature.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div id="pricing">
  <h2 className="text-2xl md:text-2xl font-bold text-[#1A365D] mb-8">
    Pricing Plans
  </h2>

  <div className="grid-cols-3 mr-12">
    {/* Basic Plan */}
    <div>
      <div className="flex justify-center mb-4 animate-fade-in-up transition-transform transform hover:scale-105">
        <CheckCircle size={40} className="text-[#D4AF37]" /> 
        <h3 className="text-[#1A365D] ml-2">Basic Plan</h3>
      </div>
    </div>

    {/* Professional Plan */}
    <div>
      <div className="flex justify-center mb-4 animate-fade-in-up transition-transform transform hover:scale-105" style={{ animationDelay: "150ms" }}>
        <Sparkles size={40} className="text-[#008080]" />  
        <h3 className="text-[#1A365D] ml-2">Professional Plan</h3>
      </div>
    </div>

    {/* Enterprise Plan */}
    <div>   
      <div className="flex justify-center mb-4 animate-fade-in-up transition-transform transform hover:scale-105" style={{ animationDelay: "300ms" }}>
        <ExternalLink size={40} className="text-[#0A66C2]" />   
        <h3 className="text-[#1A365D] ml-2">Enterprise Plan</h3>
      </div>
    </div>
  </div>
</div>




    </div>
  
  );
};

export default Hero;



