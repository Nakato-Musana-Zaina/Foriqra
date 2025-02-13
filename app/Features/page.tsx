
'use client'

import React, { useEffect, useState } from 'react';
import {
    Briefcase,
    Users,
    Target,
    Zap,
    BarChart,
    Shield,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

import type { SVGProps } from 'react';

interface FeatureCardProps {
    icon: React.ComponentType<SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    benefits: string[];
}

interface StatCardProps {
    number: string;
    label: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, benefits }) => {
    const [showBenefits, setShowBenefits] = useState(false);

    const toggleBenefits = () => {
        setShowBenefits(!showBenefits);
    };

    return (
        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D4AF37]">
            <div className="flex flex-col gap-6">
                <div className="inline-flex p-3 rounded-lg bg-[#F5F5F5] w-fit">
                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                </div>

                <h3 className="text-#1A365D text-xl font-bold">{title}</h3>
                <p className="text-#708090 leading-relaxed">{description}</p>

                <button
                    onClick={toggleBenefits}
                    className={`bg-[#008080] hover:bg-[#006666] text-white px-4 py-2 rounded-lg transition-colors duration-200 font-semibold`}
                >
                    {showBenefits ? "Hide Benefits" : "Show Benefits"}
                </button>

                {showBenefits && (
                    <ul className="space-y-3 mt-4">
                        {benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-5 h-5 mt-1">
                                    <svg className="w-full h-full text-[#008080]" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 12l5 5L20 7" />
                                    </svg>
                                </div>
                                <span className="text-#708090">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

const StatCard: React.FC<StatCardProps> = ({ number, label }) => (
    <div className="text-center p-6 bg-#F5F5F5 rounded-lg">
        <div className="text-#008080 text-4xl font-bold mb-2">{number}</div>
        <div className="text-#708090">{label}</div>
    </div>
);

const Features = () => {
    const [MotionDiv, setMotionDiv] = useState<React.ComponentType<any> | null>(null);
    const [MotionSection, setMotionSection] = useState<React.ComponentType<any> | null>(null);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        import('framer-motion').then((module) => {
            setMotionDiv(() => module.motion.div);
            setMotionSection(() => module.motion.section);
        });
    }, []);

    const features = [
        {
            icon: Briefcase,
            title: "Seamless Employer Discoverability",
            description: "Employers can easily discover portfolios based on specific skills, industries, or roles. Foriqra bridges the gap between talent and opportunity by making it easier for employers to find the perfect candidate.",
            benefits: [
                "Filters based on skills, industry, and job titles",
                "Direct messaging for employers",
                "Easily shareable across social media and job boards"
            ]
        },
        {
            icon: Users,
            title: "Showcase Projects & Experience Effectively",
            description: "Foriqra allows you to showcase your most important work in a compelling way. Highlight your best projects, list your skills, and display your experience in an interactive layout that engages potential employers.",
            benefits: [
                "Interactive galleries for projects",
                "Customizable sections for work experience, education, and achievements",
                "Options to link to platforms like GitHub, Dribbble, Behance, etc."
            ]
        },
        {
            icon: Target,
            title: "Secure and Reliable Platform",
            description: " Your data is safe with us, and our platform is built to scale. Foriqra ensures that your portfolio remains accessible at all times, without any interruptions.",
            benefits: [
                "Secure user data storage with encryption",
                "Stable platform uptime and 24/7 support",
                "Backup and recovery options for your portfolio"
            ]
        },
        {
            icon: Zap,
            title: "Mobile-Optimized Portfolios",
            description: "Your portfolio looks great no matter the device. Our mobile-optimized templates ensure that your professional story is presented perfectly on smartphones, tablets, and desktops.",
            benefits: [
                "Mobile-first design",
                "Instant previews of mobile and desktop views",
                "Cross-device compatibility for seamless viewing"
            ]
        },
        {
            icon: BarChart,
            title: "Real-Time Portfolio Analytics",
            description: "Track how your portfolio is performing with real-time analytics. Understand who’s viewing your portfolio, where they’re coming from, and how to optimize your content for better visibility.",
            benefits: [
                "Visual representation of your career progression",
                "Real-time data on views, shares, and engagement",
                "Insights on audience demographics and geographic location"
            ]
        },
        {
            icon: Shield,
            title: "Innovative Digital Portfolio Designs",
            description: " Our platform offers cutting-edge, visually stunning portfolio templates designed to highlight your unique strengths. Whether you’re a designer, developer, or creative professional, we ensure your work is presented in a way that captures attention and leaves a lasting impression.",
            benefits: [
                "High-quality, customizable templates",
                "Tailored to specific professions",
                "Modern, responsive designs optimized for all devices"
            ]
        }
    ];

    const featuresPerPage = 3;
    const totalPages = Math.ceil(features.length / featuresPerPage);
    const startIndex = currentPage * featuresPerPage;
    const endIndex = startIndex + featuresPerPage;
    const currentFeatures = features.slice(startIndex, endIndex);

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    };





    if (!MotionDiv || !MotionSection) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ backgroundColor: '#F5F5F5' }} className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl font-bold" style={{ color: '#1A365D' }}>
                            Elevate Your Professional Journey
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto mb-12" style={{ color: '#708090' }}>
                            Join thousands of professionals who trust Foriqra to advance their careers,
                            showcase their expertise, and connect with life-changing opportunities.
                        </p>
                    </MotionDiv>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16" style={{ color: '#008080' }} >
                        <StatCard number="50K+" label="Active Users" />
                        <StatCard number="98%" label="Success Rate" />
                        <StatCard number="200+" label="Top Companies" />
                        <StatCard number="45K+" label="Career Matches" />
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="px-4 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentFeatures.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-8 space-x-4">
                    <button
                            onClick={goToPreviousPage}
                            className="bg-[#1A365D] hover:bg-[#142947] text-white px-6 py-3 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                            disabled={currentPage === 0}
                        >
                            <ChevronLeft className="w-5 h-5 mr-2" />
                            Previous
                        </button>

                        <button
                            onClick={goToNextPage}
                            className="bg-[#1A365D] hover:bg-[#142947] text-white px-6 py-3 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                            disabled={currentPage === totalPages - 1}
                        >
                            Next
                            <ChevronRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <MotionSection
                className="py-16 px-4"
                style={{ backgroundColor: 'rgba(16, 69, 144, 0.1)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#1A365D' }}>
                        Ready to Transform Your Professional Future?
                    </h2>
                    <p className="text-lg mb-8" style={{ color: 'rgb(98, 116, 134)' }}>
                        Join Foriqra today and take the first step towards accelerating your career growth.
                    </p>
                    <button
                     className={`bg-[#D4AF37] hover:bg-[#B69330] justify-center left-3/4 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-opacity-50 flex items-center gap-2`}
                    >
                        Get Started For Free
                    </button>
                </div>
            </MotionSection>
        </div>
    );
};

export default Features;

