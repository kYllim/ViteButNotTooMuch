import React from 'react';
import { aboutContent } from '../data/content';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="order-2 md:order-1"
            data-aos="fade-right"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{aboutContent.title}</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">{aboutContent.description}</p>
            <div className="bg-primary-50 border-l-4 border-primary-500 pl-4 py-3 rounded mb-6">
              <p className="text-primary-700 font-medium">{aboutContent.missionStatement}</p>
            </div>
            <a 
              href="#contact" 
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Work With Us
            </a>
          </div>
          <div 
            className="order-1 md:order-2"
            data-aos="fade-left"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-500 rounded-lg opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-500 rounded-lg opacity-20"></div>
              
              {/* Main image */}
              <img 
                src={aboutContent.imageUrl} 
                alt="Digital Growth Team" 
                className="rounded-lg shadow-lg relative z-10 w-full object-cover h-auto md:h-[500px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;