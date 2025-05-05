import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HeroProps } from '../types';

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 min-h-screen flex items-center text-white py-20 md:py-0">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div 
        className="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          opacity: 0.4
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            data-aos="fade-up"
          >
            {title}
          </h1>
          <p 
            className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            {subtitle}
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <a 
              href={ctaLink} 
              className="bg-accent-500 hover:bg-accent-600 text-white font-medium px-8 py-3 rounded-md transition-all duration-300 text-center inline-flex items-center justify-center group"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium px-8 py-3 rounded-md transition-all duration-300 text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Animated scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#services" aria-label="Scroll to services section">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-white opacity-80 h-8 w-8"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;