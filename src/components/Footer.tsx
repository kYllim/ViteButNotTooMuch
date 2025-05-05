import React from 'react';
import { Zap, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { navigation } from '../data/content';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 text-white font-bold text-xl mb-4">
              <Zap className="h-6 w-6" />
              <span>ViteButNotTooMuch</span>
            </div>
            <p className="mb-4 text-gray-400">
              Experts en optimisation Vite et développement web performant pour votre entreprise.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Optimisation Vite
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Stratégie de Performance
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Optimisation Technique
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Analyse & Rapports
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contactez-nous</h3>
            <address className="not-italic">
              <p className="mb-2 text-gray-400">123 Avenue du Digital</p>
              <p className="mb-2 text-gray-400">75001 Paris, France</p>
              <p className="mb-2 text-gray-400">contact@vitebutnotoomuch.fr</p>
              <p className="text-gray-400">+33 1 23 45 67 89</p>
            </address>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {year} ViteButNotTooMuch. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="/confidentialite" className="text-gray-500 hover:text-white text-sm transition-colors">
              Politique de Confidentialité
            </a>
            <a href="/conditions" className="text-gray-500 hover:text-white text-sm transition-colors">
              Conditions d'Utilisation
            </a>
            <a href="/sitemap.xml" className="text-gray-500 hover:text-white text-sm transition-colors">
              Plan du Site
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;