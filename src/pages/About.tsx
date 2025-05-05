import React from 'react';
import SEOHead from '../components/SEOHead';
import { aboutContent } from '../data/content';
import { Clock, Users, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  const timeline = [
    {
      year: "2019",
      title: "Naissance de ViteButNotTooMuch",
      description: "Fondée par une équipe de développeurs passionnés, ViteButNotTooMuch naît d'un constat simple : les applications web modernes sont souvent sur-optimisées au détriment de la maintenabilité et de l'expérience utilisateur."
    },
    {
      year: "2020",
      title: "Développement de notre Méthodologie",
      description: "Après des mois de recherche et développement, nous établissons notre approche unique d'optimisation équilibrée, combinant performance et pragmatisme."
    },
    {
      year: "2021",
      title: "Premiers Succès",
      description: "Notre méthodologie prouve son efficacité avec nos premiers clients, permettant des gains de performance de 60% tout en préservant l'intégrité des applications."
    },
    {
      year: "2022",
      title: "Expansion de l'Équipe",
      description: "L'équipe s'agrandit pour inclure des experts en performance web, UX et architecture logicielle, renforçant notre capacité à délivrer des solutions complètes."
    },
    {
      year: "2023",
      title: "Innovation Continue",
      description: "Lancement de nos outils d'analyse propriétaires et de notre programme de formation pour les équipes de développement."
    },
    {
      year: "2024",
      title: "Leadership d'Opinion",
      description: "ViteButNotTooMuch devient une référence dans l'écosystème Vite, participant activement à la communauté et partageant notre expertise via des conférences et publications."
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "200+",
      label: "Clients Satisfaits"
    },
    {
      icon: Clock,
      value: "60%",
      label: "Gain de Performance Moyen"
    },
    {
      icon: Award,
      value: "50+",
      label: "Projets Réussis"
    },
    {
      icon: Target,
      value: "100%",
      label: "Satisfaction Client"
    }
  ];

  return (
    <>
      <SEOHead 
        title="À Propos de ViteButNotTooMuch | Experts en Optimisation Vite"
        description="Découvrez l'histoire de ViteButNotTooMuch, notre expertise en optimisation Vite et notre mission d'aider les entreprises à améliorer leurs performances web."
      />
      
      <div className="pt-24 bg-gray-50">
        {/* Hero Section */}
        <div className="bg-primary-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Notre Histoire
              </h1>
              <p className="text-xl opacity-90">
                Depuis 2019, ViteButNotTooMuch redéfinit les standards de l'optimisation web en trouvant le parfait équilibre entre performance et fonctionnalité.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Mission et Vision */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {aboutContent.missionStatement}
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary-600">Notre Vision</h3>
                <p className="text-gray-700">
                  Nous imaginons un web où performance et fonctionnalité coexistent harmonieusement, où chaque milliseconde gagnée ne compromet pas l'expérience utilisateur.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={aboutContent.imageUrl}
                alt="L'équipe ViteButNotTooMuch"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-full opacity-50 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-100 rounded-full opacity-50 -z-10"></div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <stat.icon className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Notre Parcours
            </h2>
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div 
                  key={index}
                  className="flex flex-col md:flex-row gap-8 items-start"
                >
                  <div className="md:w-32 flex-shrink-0">
                    <div className="text-2xl font-bold text-primary-600">{event.year}</div>
                  </div>
                  <div className="flex-grow bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Valeurs */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Nos Valeurs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary-600 mb-4">Excellence Technique</h3>
                <p className="text-gray-700">
                  Nous maintenons les plus hauts standards de qualité dans chaque aspect de notre travail.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary-600 mb-4">Innovation Responsable</h3>
                <p className="text-gray-700">
                  Nous innovons de manière réfléchie, en gardant toujours à l'esprit l'impact sur nos clients.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary-600 mb-4">Transparence</h3>
                <p className="text-gray-700">
                  Nous communiquons ouvertement et honnêtement avec nos clients et partenaires.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary-600 mb-4">Satisfaction Client</h3>
                <p className="text-gray-700">
                  Le succès de nos clients est notre priorité absolue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;