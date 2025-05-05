import React from 'react';
import SEOHead from '../components/SEOHead';
import { blogPosts } from '../data/content';

const Blog: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Blog - Conseils d'Optimisation Vite | ViteButNotTooMuch"
        description="Découvrez nos articles sur l'optimisation Vite, les meilleures pratiques et les dernières techniques pour améliorer la performance de vos applications."
      />
      
      <div className="pt-24 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Blog ViteButNotTooMuch
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <a href={`#blog/post/${post.slug}`} className="block">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-3 text-gray-900 hover:text-primary-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{post.date}</span>
                      <span className="text-gray-500">{post.author}</span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;