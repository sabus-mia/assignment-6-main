import React from 'react';
import heroImage from '../assets/banner.png'; 

const HeroSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-4 py-1.5 rounded-full">
            ⭐ New AI-Powered Tools Available
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Supercharge Your <span className="text-purple-600">Digital Workflow</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-purple-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-purple-700 transition">
              Explore Products
            </button>
            <button className="bg-white text-purple-600 px-8 py-3.5 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-50 transition">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative border-4 border-dashed border-sky-400 p-4 rounded-xl">
          <img 
            src={heroImage} 
            alt="Digital Workflow" 
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;