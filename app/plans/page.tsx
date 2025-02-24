"use client"

import Head from 'next/head';
import Image from 'next/image';
import { AiOutlineArrowRight, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
import { useState } from 'react'; // Import useState
import Footer from '../components/Footer';
import Navbar from '../components/navbar';

export default function ServicesPage() {
  const [showBasicDetails, setShowBasicDetails] = useState(false);
  const [showProfessionalDetails, setShowProfessionalDetails] = useState(false);
  const [showEnterpriseDetails, setShowEnterpriseDetails] = useState(false);

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

  const visibleItemsCount = 2; // Reduced to 2 for summary

  const summarizeDetails = (details: string[]): string[] => {
    return details.slice(0, 2); // Get the first two lines as the summary
  };

  return (
    <>
    <Navbar/>
      <Head>
        <title>Foriqra - Our Services</title>
        <meta name="description" content="Foriqra's service offerings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white relative">
        {/* Background Image */}
        <div className="relative h-[33vh] w-full overflow-hidden">
          <Image
            src="/image/green.png" // Replace with your image path
            alt="Service Background"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div> {/* Optional: Darken image */}
        </div>

        {/* Main Content */}
        <main className="mx-auto px-8 sm:px-12 lg:px-16 py-12"> {/* Increased left/right margins */}
          {/* Hero Section */}
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-5xl font-semibold mb-5 text-[#1A365D]">OUR SERVICES</h2>
            <p className="text-lg text-gray-600 max-w-2xl text-center">We offer comprehensive portfolio solutions tailored to your professional needs. Each package is designed to showcase your work effectively.</p>
          </div>

          {/* Service Sections */}
          <div className="mb-32 ml-28 mr-28 space-y-12">

            {/* Basic Package */}
            <div className=" rounded-lg p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 space-y-6">
                <h3 className="text-3xl font-semibold text-[#1A365D]">Basic Portfolio Package</h3>
                <p className="text-lg text-gray-600 mb-8">For professionals who need a simple, yet effective online presence.</p>
                <div className="text-lg text-gray-600 space-y-3">
                  {/* Display only the summarized details if not expanded */}
                  {!showBasicDetails ? (
                    <>
                      {summarizeDetails([
                        "Portfolio Type: Single-page, modern digital portfolio",
                        "Customization: Choose from 3-5 stylish templates. Limited color & font customization",
                        "Hosting & Domain: Free subdomain on Foriqra (e.g., yourname.foriqra.com), SSL Certificate (Secure Website)",
                        "Content Sections: Profile Section – Name, title, short bio, and profile picture, Work Experience – Showcase up to 3 projects with images & descriptions, Contact Section – Email, phone, and social media links, Skills Section – Display up to 5 key skills",
                        "Mobile Responsive: Optimized for desktops, tablets, and mobile phones",
                        "Basic SEO Optimization: Metadata setup for Google indexing, Basic search engine optimization for visibility",
                        "Security & Reliability: SSL security, Basic website speed optimization",
                        "Customer Support: Email-only support",
                        "Hosting Included: Free hosting with 99.9% uptime",
                        "Analytics: Basic visitor stats (number of visits & page views)"
                      ]).map((detail, index) => (
                        <p key={index} className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> {detail}</p>
                      ))}
                    </>
                  ) : (
                    <BasicPlanDetails isExpanded={showBasicDetails} />
                  )}
                </div>
                <p className="text-md text-gray-700 mt-4">💡 Best for students, entry-level professionals, or those who just need a simple yet elegant digital portfolio.</p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                  <button
                    className="bg-[#168763] hover:bg-[#00a36c] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#20c997] focus:ring-opacity-50"
                    aria-label="Get Started with Basic Portfolio"
                  >
                    <span className="font-medium">Get Started Now</span>
                    <AiOutlineArrowRight size={20} className="animate-slide-x" />
                  </button>
                  <button
                    className={`bg-white text-[#168763] border-[#168763] border-2 px-4 py-2 rounded-lg font-medium hover:bg-[#d0f2eb] focus:outline-none flex items-center`}
                    onClick={toggleBasicDetails}
                  >
                    {showBasicDetails ? (
                      <>View Less <AiOutlineArrowUp className="ml-1" /></>
                    ) : (
                      <>View More <AiOutlineArrowDown className="ml-1" /></>
                    )}
                  </button>

                </div>
              </div>
              <div className="md:w-1/2 relative aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden border-4 border-[#D4AF37] w-72 h-96">
                <Image
                  src="/images/service-overview.jpg"
                  alt="Service Overview"
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-[#1A365D] text-2xl font-semibold">Basic Portfolio</h3>
                  <p className="text-[#D4AF37]">$200 one-time fee</p>
                </div>
              </div>
            </div>


            {/* Professional Package */}
            <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 relative aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden border-4 border-[#D4AF37] w-72 h-96">
                <Image
                  src="/images/basic-portfolio.jpg"
                  alt="Professional Portfolio Preview"
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-[#1A365D] text-2xl font-semibold">Professional Portfolio</h3>
                  <p className="text-[#D4AF37]">$280 one-time fee</p>
                </div>
              </div>
              <div className="md:w-1/2 space-y-6">
                <h3 className="text-3xl font-semibold text-[#1A365D]">Professional Portfolio Package</h3>
                <p className="text-lg text-gray-600 mb-8">Everything in Basic Plan, plus advanced features for established professionals.</p>
                <div className="text-lg text-gray-600 space-y-3">
                  {!showProfessionalDetails ? (
                    <>
                      {summarizeDetails([
                        "Portfolio Type: Multi-page digital portfolio (Home, About, Work, Contact)",
                        "Advanced Customization: Choose from 8-12 premium templates, Advanced color & font customization, Customizable section layouts, Personalized branding (logo, favicon, brand colors)",
                        "Hosting & Domain: Custom domain option (e.g., yourname.com), Faster loading speeds with performance optimization",
                        "Content Sections: Extended Profile Section – Detailed biography & achievements, Work Portfolio – Showcase unlimited projects with case studies, images, and videos, Testimonials & Reviews – Display client/employer recommendations, Blog Section – Write and share articles to boost visibility, Certifications & Education – Display degrees, courses, and training",
                        "Multimedia Support: Embed videos, audio, and slideshows, Downloadable resume & portfolio documents",
                        "SEO & Performance Optimization: Advanced SEO tools (meta tags, structured data, sitemap for Google), Google Analytics Integration for visitor tracking, Optimized for faster performance & page speed",
                        "Security & Reliability: Daily automatic backups, Advanced firewall protection",
                        "Social Media & Integration: LinkedIn & Behance Integration, Live social media feed (Twitter, Instagram, LinkedIn), Contact form with direct email notifications",
                        "Customer Support: Priority email & live chat support"
                      ]).map((detail, index) => (
                        <p key={index} className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> {detail}</p>
                      ))}
                    </>
                  ) : (
                    <ProfessionalPlanDetails isExpanded={showProfessionalDetails} />
                  )}
                </div>
                <p className="text-md text-gray-700 mt-4">💡 Best for freelancers, creatives, and mid-level professionals looking to make an impact online.</p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                  <button
                    className="bg-[#168763] hover:bg-[#00a36c] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#20c997] focus:ring-opacity-50"
                    aria-label="Get Started with Professional Portfolio"
                  >
                    <span className="font-medium">Get Started Now</span>
                    <AiOutlineArrowRight size={20} className="animate-slide-x" />
                  </button>
                  <button
                    className={`bg-white text-[#168763] border-[#168763] border-2 px-4 py-2 rounded-lg font-medium hover:bg-[#d0f2eb] focus:outline-none flex items-center`}
                    onClick={toggleProfessionalDetails}
                  >
                    {showProfessionalDetails ? (
                      <>View Less <AiOutlineArrowUp className="ml-1" /></>
                    ) : (
                      <>View More <AiOutlineArrowDown className="ml-1" /></>
                    )}
                  </button>
                </div>
              </div>

            </div>






            {/* Enterprise Package */}
            <div className=" rounded-lg p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 space-y-6">
                <h3 className="text-3xl font-semibold text-[#1A365D]">Enterprise Portfolio Package</h3>
                <p className="text-lg text-gray-600 mb-8">Everything in Professional Plan, plus premium features for industry leaders.</p>
                <div className="text-lg text-gray-600 space-y-3">
                  {!showEnterpriseDetails ? (
                    <>
                      {summarizeDetails([
                        "Portfolio Type: Fully customizable multi-page portfolio",
                        "Complete Customization & Personalization: Custom UI/UX design tailored to your brand, Bespoke fonts, animations, and interactive elements, Dark mode & light mode options",
                        "Hosting & Domain: Dedicated hosting for high performance, Unlimited bandwidth & storage, Enterprise-grade security & DDoS protection",
                        "Advanced Content Sections: Interactive Portfolio with advanced animations & hover effects, AI-powered resume analysis & recommendations, Custom inquiry forms to collect leads from potential clients or recruiters, Private sections (Password-protected portfolios for exclusive clients)",
                        "Multimedia & Integrations: Full video portfolio support (including YouTube & Vimeo integration), API integrations with job boards, CRMs, and third-party platforms, Custom branded email system (e.g., hello@yourname.com), Integration with Google Drive, Dropbox, and cloud storage",
                        "SEO & Analytics: AI-powered SEO recommendations, Real-time visitor analytics & heatmaps, A/B testing to optimize page performance",
                        "E-Commerce & Monetization: (Optional) Sell services/products directly from your portfolio, Integrated payment gateways (PayPal, Stripe, etc.)",
                        "Security & Performance: Enterprise-grade firewall & malware protection, Daily backups & restore options, Guaranteed 99.99% uptime",
                        "Customer Support: 24/7 VIP support & dedicated account manager"
                      ]).map((detail, index) => (
                        <p key={index} className="flex items-center"><AiOutlineArrowRight className="mr-2 text-green-500" /> {detail}</p>
                      ))}
                    </>
                  ) : (
                    <EnterprisePlanDetails isExpanded={showEnterpriseDetails} />
                  )}
                </div>
                <p className="text-md text-gray-700 mt-4">💡 Best for executives, consultants, agencies, and professionals who need a cutting-edge, highly interactive portfolio to stand out.</p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                  <button
                    className="bg-[#168763] hover:bg-[#00a36c] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#20c997] focus:ring-opacity-50"
                    aria-label="Get Started with Enterprise Portfolio"
                  >
                    <span className="font-medium">Get Started Now</span>
                    <AiOutlineArrowRight size={20} className="animate-slide-x" />
                  </button>
                  <button
                    className={`bg-white text-[#168763] border-[#168763] border-2 px-4 py-2 rounded-lg font-medium hover:bg-[#d0f2eb] focus:outline-none flex items-center`}
                    onClick={toggleEnterpriseDetails}
                  >
                    {showEnterpriseDetails ? (
                      <>View Less <AiOutlineArrowUp className="ml-1" /></>
                    ) : (
                      <>View More <AiOutlineArrowDown className="ml-1" /></>
                    )}
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 relative aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden border-4 border-[#D4AF37] w-72 h-96">
                <Image
                  src="/images/enterprise-portfolio.jpg"
                  alt="Enterprise Portfolio Preview"
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-[#1A365D] text-2xl font-semibold">Enterprise Portfolio</h3>
                  <p className="text-[#D4AF37]">$400 one-time fee</p>
                </div>
              </div>
            </div>

          </div>

          {/* Additional Information */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4 text-[#1A365D]">Additional Information</h3>
            <p className="text-gray-600">For users on the Basic and Professional packages, they only need to pay again if they require significant changes made to their profiles, such as adding new sections or substantially redesigning the portfolio.</p>
          </div>
        </main>
        <Footer/>
      </div>
    </>
  );
}