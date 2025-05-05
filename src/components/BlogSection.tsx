import React from 'react';
import { Clock, User } from 'lucide-react';
import { blogPosts } from '../data/content';

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            data-aos="fade-up"
          >
            Latest SEO Insights
          </h2>
          <p 
            className="text-xl text-gray-600 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Stay up-to-date with the latest trends and strategies in SEO and digital marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center ml-4">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{post.title}</h3>
                <p className="text-gray-600 mb-5 flex-grow">{post.excerpt}</p>
                <a 
                  href={`/blog/${post.slug}`} 
                  className="text-primary-600 font-medium inline-flex items-center mt-auto group"
                >
                  Read More
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/blog" 
            className="inline-block border-2 border-primary-600 text-primary-600 hover:text-white hover:bg-primary-600 font-medium px-8 py-3 rounded-md transition-colors"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;