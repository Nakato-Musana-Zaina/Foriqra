
"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Camera, Lightbulb, Lock, Paintbrush, Users } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Team Member 1",
      role: "CEO & Founder",
      image: "/api/placeholder/300/400"
    },
    {
      name: "Team Member 2",
      role: "Lead Designer",
      image: "/api/placeholder/300/400"
    },
    {
      name: "Team Member 3",
      role: "Development Lead",
      image: "/api/placeholder/300/400"
    },
    {
      name: "Team Member 4",
      role: "Marketing Director",
      image: "/api/placeholder/300/400"
    }
  ];

  const stats = [
    { label: "PROJECTS", value: "50+", icon: <Camera className="w-8 h-8" /> },
    { label: "CLIENT HAPPY", value: "30+", icon: <Users className="w-8 h-8" /> },
    { label: "PORTFOLIOS", value: "200+", icon: <Paintbrush className="w-8 h-8" /> }
  ];

  const coreValues = [
    {
      title: "Innovation",
      description: "We strive for cutting-edge designs that reflect our clients' unique strengths.",
      icon: <Lightbulb className="w-12 h-12 text-teal-500" />
    },
    {
      title: "Accessibility",
      description: "Easy-to-use platforms ensure seamless interaction for both job seekers and employers.",
      icon: <Users className="w-12 h-12 text-teal-500" />
    },
    {
      title: "Creativity",
      description: "We believe in crafting portfolios that tell compelling stories about our clients.",
      icon: <Paintbrush className="w-12 h-12 text-teal-500" />
    },
    {
      title: "Trust & Reliability",
      description: "Ensuring platform stability and security for all users.",
      icon: <Lock className="w-12 h-12 text-teal-500" />
    }
  ];

  useEffect(() => {
    // Animation for elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    });

    fadeElements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">

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
      {/* Hero Section */}
      <div className="flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-semibold text-[#1A365D] mt-4 mb-4" style={{ color: '#1A365D' }}>
            About Us
          </h1>
          <div className="text-black fade-in opacity-0 translate-y-10 transition-all duration-1000 delay-200">
            About Us and our Team
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#1A365D' }}>OUR STORY</h2>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">{`To empower professionals to showcase their talents effectively by providing innovative digital portfolio solutions that bridge the gap between talent and opportunity.`}</p>
              <p className="leading-relaxed">{`To become the global standard for digital portfolio creation, where every professional can confidently present their work and where employers discover exceptional talent effortlessly.`}</p>
            </div>
          </div>
          <div className="fade-in opacity-0 translate-y-10 transition-all duration-1000 delay-200">
            <img 
              src="/api/placeholder/500/400" 
              alt="About Us"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 fade-in opacity-0 translate-y-10 transition-all duration-1000" style={{ color: '#1A365D' }}>
            Our Company Story
          </h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl fade-in opacity-0 translate-y-10 transition-all duration-1000 delay-200">
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Company Video Placeholder</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1A365D' }}>ALL MEMBERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group fade-in opacity-0 translate-y-10 transition-all duration-1000" style={{ transitionDelay: `${index * 200}ms` }}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg" style={{ color: '#1A365D' }}>{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                  <div className="flex justify-center space-x-3 mt-3">
                    <span className="w-6 h-6 rounded-full bg-teal-200 hover:bg-teal-300 transition-colors cursor-pointer"></span>
                    <span className="w-6 h-6 rounded-full bg-teal-200 hover:bg-teal-300 transition-colors cursor-pointer"></span>
                    <span className="w-6 h-6 rounded-full bg-teal-200 hover:bg-teal-300 transition-colors cursor-pointer"></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1A365D' }}>Our Core Values</h2>
          <div className="">
            {coreValues.map((value, index) => (
              <div key={index} className="fade-in opacity-0 translate-y-10 transition-all duration-1000" style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1A365D' }}>{value.title}</h3>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="fade-in opacity-0 translate-y-10 transition-all duration-1000" style={{ transitionDelay: `${index * 200}ms` }}>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex justify-center mb-4 text-teal-500">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold" style={{ color: '#1A365D' }}>{stat.value}</div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 fade-in opacity-0 translate-y-10 transition-all duration-1000">
            Get The Experience
          </h2>
          <p className="text-teal-100 mb-8 max-w-2xl mx-auto fade-in opacity-0 translate-y-10 transition-all duration-1000 delay-200">
            Join us in revolutionizing the way professionals showcase their talents and connect with opportunities.
          </p>
          <button className="bg-white text-teal-600 px-8 py-3 rounded-full hover:bg-teal-50 transition-colors duration-300 transform hover:scale-105 fade-in opacity-0 translate-y-10 transition-all duration-1000 delay-400">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;