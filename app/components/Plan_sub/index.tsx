
"use client";

import Head from 'next/head';
import React from 'react';
import { AiOutlineArrowRight, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link

// Define an interface for the plan image sources
interface PlanImage {
  src: string;
  alt: string;
}

 function ServicesPage() {
  const [showBasicDetails, setShowBasicDetails] = useState(false);
  const [showProfessionalDetails, setShowProfessionalDetails] = useState(false);
  const [showEnterpriseDetails, setShowEnterpriseDetails] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const planImages: PlanImage[] = [
    { src: '/images/plan-basic.jpg', alt: 'Basic Plan' }, // Replace with actual image paths
    { src: '/images/plan-professional.jpg', alt: 'Professional Plan' },
    { src: '/images/plan-enterprise.jpg', alt: 'Enterprise Plan' },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % planImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [planImages.length]);

  const toggleBasicDetails = () => {
    setShowBasicDetails(!showBasicDetails);
  };

  const toggleProfessionalDetails = () => {
    setShowProfessionalDetails(!showProfessionalDetails);
  };

  const toggleEnterpriseDetails = () => {
    setShowEnterpriseDetails(!showEnterpriseDetails);
  };

  const BasicPlanDetails = ({ isExpanded }: { isExpanded: boolean }) => (
    <>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Portfolio Type: Single-page, modern digital portfolio</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Customization: Choose from 3-5 stylish templates. Limited color & font customization</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Hosting & Domain: Free subdomain on Foriqra (e.g., yourname.foriqra.com), SSL Certificate (Secure Website)</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Content Sections: Profile Section – Name, title, short bio, and profile picture, Work Experience – Showcase up to 3 projects with images & descriptions, Contact Section – Email, phone, and social media links, Skills Section – Display up to 5 key skills</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Mobile Responsive: Optimized for desktops, tablets, and mobile phones</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Basic SEO Optimization: Metadata setup for Google indexing, Basic search engine optimization for visibility</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Security & Reliability: SSL security, Basic website speed optimization</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Customer Support: Email-only support</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Hosting Included: Free hosting with 99.9% uptime</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Analytics: Basic visitor stats (number of visits & page views)</p>
    </>
  );

  const ProfessionalPlanDetails = ({ isExpanded }: { isExpanded: boolean }) => (
    <>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Portfolio Type: Multi-page digital portfolio (Home, About, Work, Contact)</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Advanced Customization: Choose from 8-12 premium templates, Advanced color & font customization, Customizable section layouts, Personalized branding (logo, favicon, brand colors)</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Hosting & Domain: Custom domain option (e.g., yourname.com), Faster loading speeds with performance optimization</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Content Sections: Extended Profile Section – Detailed biography & achievements, Work Portfolio – Showcase unlimited projects with case studies, images, and videos, Testimonials & Reviews – Display client/employer recommendations, Blog Section – Write and share articles to boost visibility, Certifications & Education – Display degrees, courses, and training</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Multimedia Support: Embed videos, audio, and slideshows, Downloadable resume & portfolio documents</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> SEO & Performance Optimization: Advanced SEO tools (meta tags, structured data, sitemap for Google), Google Analytics Integration for visitor tracking, Optimized for faster performance & page speed</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Security & Reliability: Daily automatic backups, Advanced firewall protection</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Social Media & Integration: LinkedIn & Behance Integration, Live social media feed (Twitter, Instagram, LinkedIn), Contact form with direct email notifications</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Customer Support: Priority email & live chat support</p>
    </>
  );

  const EnterprisePlanDetails = ({ isExpanded }: { isExpanded: boolean }) => (
    <>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Portfolio Type: Fully customizable multi-page portfolio</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Complete Customization & Personalization: Custom UI/UX design tailored to your brand, Bespoke fonts, animations, and interactive elements, Dark mode & light mode options</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Hosting & Domain: Dedicated hosting for high performance, Unlimited bandwidth & storage, Enterprise-grade security & DDoS protection</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Advanced Content Sections: Interactive Portfolio with advanced animations & hover effects, AI-powered resume analysis & recommendations, Custom inquiry forms to collect leads from potential clients or recruiters, Private sections (Password-protected portfolios for exclusive clients)</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Multimedia & Integrations: Full video portfolio support (including YouTube & Vimeo integration), API integrations with job boards, CRMs, and third-party platforms, Custom branded email system (e.g., hello@yourname.com), Integration with Google Drive, Dropbox, and cloud storage</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> SEO & Analytics: AI-powered SEO recommendations, Real-time visitor analytics & heatmaps, A/B testing to optimize page performance</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> E-Commerce & Monetization: (Optional) Sell services/products directly from your portfolio, Integrated payment gateways (PayPal, Stripe, etc.)</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Security & Performance: Enterprise-grade firewall & malware protection, Daily backups & restore options, Guaranteed 99.99% uptime</p>
      <p className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> Customer Support: 24/7 VIP support & dedicated account manager</p>
    </>
  );

  const summarizeDetails = (details: string[]): string[] => {
    return details.slice(0, 2); // Get the first two lines as the summary
  };

  return (
    <>
      <Head>
        <title>Foriqra - Our Services</title>
        <meta name="description" content="Foriqra's service offerings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white relative">
        {/* Background Image */}


        {/* Main Content */}
        <main className="mx-auto px-8 sm:px-12 lg:px-16 py-12">
          {/* Hero Section */}
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold mb-5 text-[#1A365D]">OUR SERVICES</h2>
            <p className="text-lg text-gray-600 max-w-2xl text-center">We offer comprehensive portfolio solutions tailored to your professional needs. Each package is designed to showcase your work effectively.</p>
          </div>

          {/* Image Slideshow */}
          <div className="relative mb-10 overflow-hidden rounded-lg shadow-md">
            <img
              src={planImages[currentImageIndex].src}
              alt={planImages[currentImageIndex].alt}
              className="w-64 h-64 object-cover transition-opacity duration-500" // Add transition
            />
             {/* Optional: Add a dark overlay for text readability */}
            {/* <div className="absolute inset-0 bg-black opacity-25"></div> */}
          </div>


          {/* Service Sections (Simplified for Homepage) */}
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-10"> {/* Flex container */}

            {/* Basic Package */}
            <div className="bg-gray-100 rounded-lg p-6 md:p-8 flex flex-col items-center text-center w-full md:w-1/3"> {/* Center content, adjust width */}
              <h3 className="text-2xl font-semibold text-[#1A365D] mb-2">Basic</h3>
              <p className="text-gray-600 mb-4">Perfect for getting started.</p>
              <div className="text-gray-600 space-y-2 mb-4">
                {summarizeDetails([
                  "Portfolio Type: Single-page, modern digital portfolio",
                  "Customization: Choose from 3-5 stylish templates."
                ]).map((detail, index) => (
                  <p key={index} className="flex items-center justify-center"><AiOutlineArrowRight className="mr-1 text-green-500" /> {detail}</p>
                ))}
              </div>
              <p className="text-md text-gray-700 mb-4">💡 Ideal for students and entry-level professionals.</p>
              <p className="text-[#D4AF37] font-semibold">$200 one-time fee</p>
            </div>


            {/* Professional Package */}
            <div className="bg-gray-100 rounded-lg p-6 md:p-8 flex flex-col items-center text-center w-full md:w-1/3"> {/* Center content, adjust width */}
              <h3 className="text-2xl font-semibold text-[#1A365D] mb-2">Professional</h3>
              <p className="text-gray-600 mb-4">Everything in Basic, plus advanced features.</p>
              <div className="text-gray-600 space-y-2 mb-4">
                {summarizeDetails([
                  "Portfolio Type: Multi-page digital portfolio",
                  "Advanced Customization: Premium templates, branding."
                ]).map((detail, index) => (
                  <p key={index} className="flex items-center justify-center"><AiOutlineArrowRight className="mr-1 text-green-500" /> {detail}</p>
                ))}
              </div>
               <p className="text-md text-gray-700 mb-4">💡 Best for freelancers and mid-level professionals.</p>
              <p className="text-[#D4AF37] font-semibold">$280 one-time fee</p>
            </div>

            {/* Enterprise Package */}
            <div className="bg-gray-100 rounded-lg p-6 md:p-8 flex flex-col items-center text-center w-full md:w-1/3"> {/* Center content, adjust width */}
              <h3 className="text-2xl font-semibold text-[#1A365D] mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-4">For industry leaders and agencies.</p>
              <div className="text-gray-600 space-y-2 mb-4">
                {summarizeDetails([
                   "Portfolio Type: Fully customizable multi-page portfolio",
                  "Complete Customization & Personalization: Custom UI/UX design."
                ]).map((detail, index) => (
                  <p key={index} className="flex items-center justify-center"><AiOutlineArrowRight className="mr-1 text-green-500" /> {detail}</p>
                ))}
              </div>
               <p className="text-md text-gray-700 mb-4">💡 Best for executives and agencies.</p>
              <p className="text-[#D4AF37] font-semibold">$400 one-time fee</p>
            </div>
          </div>

          {/* View All Plans Button */}
          <div className="text-center">
            <Link href="/plans"  // Assuming the full services page is at /services
              className="bg-[#168763] hover:bg-[#00a36c] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#20c997] focus:ring-opacity-50"
            >
              View All Plans <AiOutlineArrowRight size={20} className="animate-slide-x" />
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}


export default ServicesPage