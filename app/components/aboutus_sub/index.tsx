import React from 'react';
import { Lightbulb, Users, Paintbrush, Lock } from 'lucide-react';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai'; // Import the arrow icon (assuming you have it)

const MissionValuesSection = () => {
    // Core values from the original code
    const coreValues = [
        {
            title: "Innovation",
            description: "We strive for cutting-edge designs that reflect our clients' unique strengths.",
            icon: <Lightbulb className="w-10 h-10 text-[#DAA520]" /> // Soft gold
        },
        {
            title: "Accessibility",
            description: "Easy-to-use platforms ensure seamless interaction for both job seekers and employers.",
            icon: <Users className="w-10 h-10 text-[#DAA520]" /> // Soft gold
        },
        {
            title: "Creativity",
            description: "We believe in crafting portfolios that tell compelling stories about our clients.",
            icon: <Paintbrush className="w-10 h-10 text-[#DAA520]" /> // Soft gold
        },
        {
            title: "Trust & Reliability",
            description: "Ensuring platform stability and security for all users.",
            icon: <Lock className="w-10 h-10 text-[#DAA520]" /> // Soft gold
        }
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                {/* About Us Heading
                <h2 className="text-3xl font-bold text-center mb-6 text-[#1A365D]">ABOUT US</h2> */}

                {/* Mission Section */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-center mb-4 text-[#1A365D]">OUR MISSION</h3>
                    <p className="max-w-3xl mx-auto text-gray-600 text-center mb-8 leading-relaxed">
                        To empower professionals to showcase their talents effectively by providing innovative digital portfolio
                        solutions that bridge the gap between talent and opportunity.
                    </p>
                </div>

                {/* Values Section */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-center mb-4 text-[#1A365D]">OUR CORE VALUES</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {coreValues.map((value, index) => (
                            <div key={index} className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#1A365D] mb-2 text-center">{value.title}</h3>
                                <p className="text-gray-600 text-center">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Company Related Button */}
                {/* <div className="text-center">
                    <Link href="/about"  // Link to the "about" page
                        className="bg-[#168763] hover:bg-[#00a36c] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#20c997] focus:ring-opacity-50"
                    >
                        Our team <AiOutlineArrowRight size={20} className="animate-slide-x" />
                    </Link>
                </div> */}


            <div className=" text-center py-16 px-4 m-14 ml-24 mr-24"
                style={{ backgroundColor: 'rgba(16, 69, 144, 0.1)' }}>
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#1A365D' }}>
                    Be part of a team that values you?
                </h2>
                <p className="text-lg mb-8" style={{ color: 'rgb(98, 116, 134)' }}>
                    Learn more about the Foriqra team today as we empower you to reach the best of your potential.
                </p>
                <div className="flex justify-center">
                <Link href="/about_us"  // Link to the "about" page
                        className="bg-[#168763] hover:bg-[#00a36c] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#20c997] focus:ring-opacity-50"
                    >
                        Our team <AiOutlineArrowRight size={20} className="animate-slide-x" />
                </Link>
            </div>
            </div>



            </div>
        </section>
    );
};

export default MissionValuesSection;