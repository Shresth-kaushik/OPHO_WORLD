import React from 'react';
import { useState } from 'react';
import { ArrowRight, Link, Lightbulb, TrendingUp } from 'lucide-react';
import DemoModal from './DemoModal';
import AnimatedPyramidHub from './AnimatedPyramidHub';
import MarketGapsTrends from './MarketGapsTrends';
import SustainabilityGaps from './SustainabilityGaps';
import InnovationPotential from './InnovationPotential';
import LeadershipEnablement from './LeadershipEnablement';
import CustomerIntelligence from './CustomerIntelligence';
import CompetitorMapping from './CompetitorMapping';

const HeroSection: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const additionalSlides = [];

  return (
    <section id="home" className="relative bg-gray-900">
      {/* Header Section with Fixed Background */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Fixed Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1568952433726-3896e3881c65?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Connect Create Evolve"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            {/* Two Card Layout with Overlap */}
            <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
              {/* Left Card - Text Content (Larger) */}
              <div className="relative z-10 glass-effect rounded-xl p-14 sm:p-18 lg:p-24 backdrop-blur-xl border border-white/20 animate-fade-in-up animation-delay-400 w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl lg:ml-16 xl:ml-24 lg:mr-8">
                <div className="text-center lg:text-left lg:pr-12 xl:pr-20">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    <span className="block mb-2 text-primary-400">From Idea to Execution</span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed">
                    We help you research, strategize, and scale—unlocking the full potential of your business.
                  </p>
                </div>
              </div>

              {/* Right Card - Image (Smaller, Overlapping over left card) */}
              <div className="relative z-20 animate-fade-in-up animation-delay-600 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-lg xl:max-w-xl lg:-ml-32 xl:-ml-40 mx-auto lg:mx-0 mb-4 mt-4 lg:mt-4">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="w-full h-96 sm:h-96 md:h-[26rem] lg:h-96 xl:h-[26rem] flex items-center justify-center">
                    <AnimatedPyramidHub />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <MarketGapsTrends />

      <SustainabilityGaps />

      <InnovationPotential />

      <LeadershipEnablement />

      <CustomerIntelligence />

      <CompetitorMapping />


      {/* Additional Slides - Stacked Vertically (excluding slide2) */}
      {additionalSlides.slice(0, 1).map((slide, index) => (
        <div key={index + 1} className="relative w-full bg-gray-900">
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-auto max-w-full"
            loading="lazy"
          />
        </div>
      ))}

      {/* Demo Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;