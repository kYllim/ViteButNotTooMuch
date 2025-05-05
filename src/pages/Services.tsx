import React from 'react';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';

const Services: React.FC = () => {
  const servicesData = {
    "@type": "Service",
    name: "Services d'Optimisation Vite",
    provider: {
      "@type": "Organization",
      name: "ViteButNotTooMuch"
    }
  };

  return (
    <>
      <SEOHead 
        title="Nos Services d'Optimisation Vite | ViteButNotTooMuch"
        description="Découvrez nos services d'optimisation Vite pour améliorer la performance de votre application. Expertise technique et solutions sur mesure."
      />
      <StructuredData type="LocalBusiness" data={servicesData} />
      
      <div className="pt-24 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Services d'Optimisation Vite
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-primary-600">Audit de Performance</h2>
              <p className="text-gray-600 mb-4">
                Analyse complète de votre application Vite pour identifier les goulots d'étranglement et les opportunités d'optimisation.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Analyse des temps de chargement</li>
                <li>• Évaluation de la configuration Vite</li>
                <li>• Identification des optimisations possibles</li>
                <li>• Rapport détaillé avec recommandations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-primary-600">Optimisation du Build</h2>
              <p className="text-gray-600 mb-4">
                Amélioration du processus de build pour des déploiements plus rapides et une meilleure performance en production.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Configuration optimale de Vite</li>
                <li>• Optimisation des dépendances</li>
                <li>• Mise en cache intelligente</li>
                <li>• Réduction de la taille du bundle</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-primary-600">Performance Runtime</h2>
              <p className="text-gray-600 mb-4">
                Optimisation des performances de votre application en cours d'exécution pour une meilleure expérience utilisateur.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Optimisation du code</li>
                <li>• Lazy loading intelligent</li>
                <li>• Gestion de la mémoire</li>
                <li>• Amélioration des temps de réponse</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-primary-600">Formation & Support</h2>
              <p className="text-gray-600 mb-4">
                Formation de vos équipes aux meilleures pratiques d'optimisation Vite et support continu.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Workshops personnalisés</li>
                <li>• Documentation sur mesure</li>
                <li>• Support technique</li>
                <li>• Suivi des performances</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;