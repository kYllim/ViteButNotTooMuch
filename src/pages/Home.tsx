import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
import ContactForm from '../components/ContactForm';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';

const Home: React.FC = () => {
  const businessData = {
    name: 'ViteButNotTooMuch',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://vitebutnotoomuch.fr',
    telephone: '+33 1 23 45 67 89',
    address: {
      street: '123 Avenue du Digital',
      locality: 'Paris',
      postalCode: '75001',
      country: 'FR'
    },
    geo: {
      latitude: '48.8566',
      longitude: '2.3522'
    },
    openingHours: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    priceRange: '€€'
  };

  const faqData = {
    questions: [
      {
        question: "Qu'est-ce que ViteButNotTooMuch ?",
        answer: "ViteButNotTooMuch est notre approche d'optimisation des applications Vite, assurant une haute performance sans complexité inutile. Nous aidons les entreprises à trouver l'équilibre parfait entre vitesse et fonctionnalité."
      },
      {
        question: "Comment l'optimisation Vite peut-elle améliorer mon site web ?",
        answer: "Une optimisation Vite appropriée peut significativement améliorer les temps de chargement, l'expérience utilisateur et le référencement de votre site. Notre approche se concentre sur l'équilibre entre fonctionnalités et performance."
      },
      {
        question: "Quels services proposez-vous ?",
        answer: "Nous proposons l'optimisation Vite, le développement de stratégies de performance, l'optimisation technique, l'analyse et le suivi, ainsi que des services de conseil pour aider les entreprises à tirer le meilleur parti de leurs applications Vite."
      },
      {
        question: "Comment mesurez-vous le succès de l'optimisation ?",
        answer: "Nous mesurons le succès à travers différentes métriques incluant les temps de chargement, les Core Web Vitals, la performance de build, la performance d'exécution et, finalement, la satisfaction des utilisateurs et les métriques commerciales."
      }
    ]
  };

  return (
    <>
      <SEOHead />
      <StructuredData type="LocalBusiness" data={businessData} />
      <StructuredData type="FAQPage" data={faqData} />
      
      <Hero 
        title="ViteButNotTooMuch : L'Équilibre Parfait pour la Performance Web"
        subtitle="Nous aidons les entreprises à optimiser leurs applications Vite pour un équilibre parfait entre performance et fonctionnalité."
        ctaText="Commencer"
        ctaLink="#contact"
      />
      <Services />
      <About />
      <Testimonials />
      <BlogSection />
      <ContactForm />
    </>
  );
};

export default Home;