import React from 'react';
import * as LucideIcons from 'lucide-react';
import { services } from '../data/content';

const Services: React.FC = () => {
  // Function to dynamically get the icon component
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as Record<string, React.FC<{ className?: string }>>)[iconName];
    return Icon ? <Icon className="h-10 w-10 text-primary-500 mb-4" /> : null;
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            data-aos="fade-up"
          >
            Our Services
          </h2>
          <p 
            className="text-xl text-gray-600 leading-relaxed"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            We provide comprehensive digital solutions to help your business grow online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full"
              data-aos="fade-up" 
              data-aos-delay={100 + index * 100}
            >
              {getIcon(service.icon)}
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <a 
                href="#contact" 
                className="text-primary-600 font-medium inline-flex items-center mt-4 group hover:text-primary-700"
              >
                Learn more
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;