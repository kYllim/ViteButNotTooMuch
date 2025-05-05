import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/content';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            What Our Clients Say
          </h2>
          <p 
            className="text-xl opacity-80 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We've helped businesses achieve remarkable growth and improve their online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 relative"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <Quote className="h-10 w-10 text-primary-400 mb-4 opacity-50" />
              <p className="text-white mb-6 leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary-300 flex items-center justify-center text-primary-900 font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-primary-300">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;