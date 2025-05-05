import { NavItem, ServiceProps, TestimonialProps, BlogPostProps } from '../types';

export const siteTitle = "ViteButNotTooMuch";
export const siteDescription = "ViteButNotTooMuch - Experts en optimisation Vite et développement web performant. Nous aidons les entreprises à trouver l'équilibre parfait entre rapidité et fonctionnalités pour leurs applications Vite.";
export const siteKeywords = [
  "ViteButNotTooMuch",
  "optimisation Vite",
  "performance web",
  "développement Vite",
  "configuration Vite",
  "build Vite",
  "expert Vite",
  "consultant Vite",
  "performance React",
  "optimisation frontend"
];

export const navigation: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "#services" },
  { label: "À Propos", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const services: ServiceProps[] = [
  {
    title: "Optimisation ViteButNotTooMuch",
    description: "Notre approche unique ViteButNotTooMuch vous aide à trouver l'équilibre parfait entre performance et fonctionnalités dans vos applications Vite. Nous optimisons votre configuration sans compromettre l'expérience utilisateur.",
    icon: "Zap"
  },
  {
    title: "Stratégie de Performance",
    description: "Développez une stratégie d'optimisation complète avec ViteButNotTooMuch. Notre méthodologie éprouvée garantit des performances optimales pour votre application Vite.",
    icon: "LineChart"
  },
  {
    title: "Optimisation Technique",
    description: "Profitez de notre expertise ViteButNotTooMuch pour optimiser chaque aspect technique de votre application. De la configuration initiale au déploiement, nous garantissons une performance maximale.",
    icon: "Code2"
  },
  {
    title: "Analyse & Suivi",
    description: "Surveillez et améliorez continuellement les performances de votre application avec nos outils ViteButNotTooMuch. Obtenez des rapports détaillés et des recommandations personnalisées.",
    icon: "BarChart"
  }
];

export const testimonials: TestimonialProps[] = [
  {
    quote: "ViteButNotTooMuch a transformé notre application. Leur approche équilibrée de l'optimisation Vite nous a permis d'améliorer significativement nos performances tout en conservant toutes nos fonctionnalités essentielles.",
    author: "Marie Dupont",
    company: "TechInnovate"
  },
  {
    quote: "Grâce à ViteButNotTooMuch, notre temps de chargement a été réduit de 60% sans compromettre l'expérience utilisateur. Leur expertise en optimisation Vite est inégalée.",
    author: "Thomas Martin",
    company: "GreenSolutions"
  },
  {
    quote: "L'approche ViteButNotTooMuch est exactement ce dont nous avions besoin. Ils ont trouvé le parfait équilibre entre performance et fonctionnalités pour notre application Vite.",
    author: "Sophie Bernard",
    company: "CreativeStudio"
  }
];

export const blogPosts: BlogPostProps[] = [
  {
    title: "ViteButNotTooMuch : L'Art de l'Équilibre en Développement Web",
    excerpt: "Découvrez comment ViteButNotTooMuch révolutionne l'approche de l'optimisation Vite en trouvant le parfait équilibre entre performance et fonctionnalités.",
    date: "15 avril 2025",
    slug: "vitebutnotoomuch-art-equilibre",
    imageUrl: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Marie Lambert"
  },
  {
    title: "Optimisation Vite : La Méthode ViteButNotTooMuch",
    excerpt: "Explorez notre méthodologie unique ViteButNotTooMuch pour optimiser vos applications Vite sans sacrifier les fonctionnalités essentielles.",
    date: "10 avril 2025",
    slug: "methode-vitebutnotoomuch",
    imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Jean Dubois"
  },
  {
    title: "ViteButNotTooMuch : Maximiser la Performance Sans Compromis",
    excerpt: "Comment ViteButNotTooMuch aide les entreprises à atteindre une performance optimale tout en maintenant une excellente expérience utilisateur.",
    date: "5 avril 2025",
    slug: "performance-sans-compromis",
    imageUrl: "https://images.pexels.com/photos/6446685/pexels-photo-6446685.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Sophie Rousseau"
  },
  {
    title: "Les Secrets de Configuration Vite par ViteButNotTooMuch",
    excerpt: "Découvrez les meilleures pratiques de configuration Vite selon l'approche ViteButNotTooMuch pour des applications performantes et maintenables.",
    date: "1 avril 2025",
    slug: "secrets-configuration-vite",
    imageUrl: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Pierre Martin"
  },
  {
    title: "ViteButNotTooMuch : Guide Complet d'Optimisation",
    excerpt: "Un guide détaillé sur l'approche ViteButNotTooMuch pour optimiser vos applications Vite de manière équilibrée et efficace.",
    date: "28 mars 2025",
    slug: "guide-optimisation-complet",
    imageUrl: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Claire Dubois"
  },
  {
    title: "Études de Cas ViteButNotTooMuch : Résultats Concrets",
    excerpt: "Explorez des cas réels d'entreprises ayant amélioré leurs performances grâce à l'approche ViteButNotTooMuch.",
    date: "25 mars 2025",
    slug: "etudes-cas-resultats",
    imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Lucas Bernard"
  }
];

export const aboutContent = {
  title: "ViteButNotTooMuch : Notre Histoire",
  description: "Depuis 2019, ViteButNotTooMuch aide les entreprises à optimiser leurs applications Vite de manière équilibrée. Notre approche unique combine expertise technique et pragmatisme pour des résultats durables.",
  missionStatement: "ViteButNotTooMuch a pour mission d'aider les développeurs et les entreprises à trouver l'équilibre parfait dans leurs applications Vite, en optimisant la performance sans sacrifier les fonctionnalités essentielles.",
  imageUrl: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
};