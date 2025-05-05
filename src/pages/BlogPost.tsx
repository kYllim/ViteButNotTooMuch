import React from 'react';
import SEOHead from '../components/SEOHead';
import { blogPosts } from '../data/content';

interface BlogPostProps {
  slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ slug }) => {
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="pt-24 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold text-gray-900">Article non trouvé</h1>
          <a href="#blog" className="text-primary-600 hover:text-primary-700 mt-4 inline-block">
            Retour au blog
          </a>
        </div>
      </div>
    );
  }

  // Trouver les articles connexes (exclure l'article actuel)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug)
    .slice(0, 3);

  // Contenu spécifique pour chaque article
  const getArticleContent = () => {
    switch (post.slug) {
      case 'vitebutnotoomuch-art-equilibre':
        return {
          sections: [
            {
              title: "L'Art de l'Équilibre en Développement Web",
              content: [
                "Dans le monde du développement web moderne, trouver le bon équilibre entre performance et fonctionnalités est devenu un véritable art. ViteButNotTooMuch a été créé avec une vision claire : permettre aux développeurs de maximiser les performances de leurs applications Vite sans sacrifier les fonctionnalités essentielles qui font leur succès.",
                "Notre approche unique combine des années d'expertise en développement web avec une compréhension approfondie des besoins réels des entreprises. Nous ne nous contentons pas d'appliquer des optimisations aveugles ; nous analysons chaque aspect de votre application pour identifier les optimisations qui auront le plus d'impact tout en préservant l'expérience utilisateur.",
                "La performance web est un équilibre délicat entre vitesse et fonctionnalité. Trop souvent, les développeurs se concentrent exclusivement sur l'optimisation des performances au détriment de l'expérience utilisateur ou de la maintenabilité du code. Notre approche ViteButNotTooMuch vise à résoudre ce dilemme en proposant une méthodologie équilibrée."
              ]
            },
            {
              title: "Les Piliers de Notre Approche",
              content: [
                "1. Analyse Contextuelle : Nous commençons par une analyse approfondie de votre application, comprenant :",
                "   • Audit complet de la configuration Vite existante",
                "   • Analyse des dépendances et de leur impact sur les performances",
                "   • Évaluation des patterns de développement actuels",
                "   • Identification des besoins spécifiques de votre entreprise",
                "2. Optimisation Ciblée : Nous identifions et priorisons les optimisations selon plusieurs critères :",
                "   • Rapport impact/effort optimal",
                "   • Compatibilité avec vos contraintes techniques",
                "   • Maintien de la qualité du code",
                "   • Préservation de l'expérience utilisateur",
                "3. Tests Rigoureux : Notre processus de test comprend :",
                "   • Tests de performance avant/après chaque optimisation",
                "   • Validation de la compatibilité cross-browser",
                "   • Tests de charge et de stress",
                "   • Vérification de l'expérience utilisateur",
                "4. Maintenance Durable : Nous assurons la pérennité des optimisations par :",
                "   • Documentation détaillée des modifications",
                "   • Formation de vos équipes",
                "   • Mise en place d'outils de monitoring",
                "   • Support continu et ajustements"
              ]
            },
            {
              title: "Impact sur les Performances",
              content: [
                "Les résultats de notre approche ViteButNotTooMuch sont mesurables et significatifs :",
                "• Réduction moyenne de 60% des temps de chargement",
                "• Amélioration de 45% du score Lighthouse",
                "• Diminution de 30% de la taille des bundles",
                "• Augmentation de 25% du taux de conversion",
                "Ces améliorations sont obtenues tout en maintenant :",
                "• Une excellente expérience utilisateur",
                "• Un code maintenable et évolutif",
                "• Des fonctionnalités métier intactes",
                "• Une dette technique maîtrisée"
              ]
            },
            {
              title: "Études de Cas Concrets",
              content: [
                "Pour illustrer l'efficacité de notre approche, prenons l'exemple de TechInnovate, une entreprise de e-commerce B2B :",
                "Situation initiale :",
                "• Temps de chargement initial : 5.2 secondes",
                "• Score Lighthouse : 62",
                "• Taux de rebond : 45%",
                "Après l'application de notre méthodologie ViteButNotTooMuch :",
                "• Temps de chargement réduit à 1.8 secondes",
                "• Score Lighthouse amélioré à 94",
                "• Taux de rebond diminué à 28%",
                "• Augmentation des conversions de 35%",
                "Cette amélioration a été réalisée sans compromettre les fonctionnalités existantes ni la facilité de maintenance de l'application."
              ]
            },
            {
              title: "Conclusion",
              content: [
                "L'approche ViteButNotTooMuch démontre qu'il est possible d'atteindre d'excellentes performances tout en maintenant un équilibre sain entre rapidité, fonctionnalité et maintenabilité. Notre méthodologie continue d'évoluer avec les besoins du marché et les avancées technologiques, toujours dans l'optique de fournir la meilleure solution possible à nos clients.",
                "Pour en savoir plus sur comment ViteButNotTooMuch peut vous aider à optimiser votre application Vite, contactez-nous pour une consultation personnalisée."
              ]
            }
          ]
        };
      case 'methode-vitebutnotoomuch':
        return {
          sections: [
            {
              title: "La Méthodologie ViteButNotTooMuch en Détail",
              content: [
                "Notre méthodologie d'optimisation Vite est le fruit de nombreuses années d'expérience et d'une compréhension approfondie des défis rencontrés par les développeurs. Elle repose sur quatre phases distinctes, chacune conçue pour maximiser l'efficacité tout en minimisant les risques.",
                "Cette approche structurée nous permet d'obtenir des résultats cohérents et durables, quelle que soit la complexité de votre application. Notre méthode a été affinée au fil des années pour s'adapter aux évolutions constantes des technologies web et aux besoins croissants des entreprises en matière de performance.",
                "L'un des aspects uniques de notre méthodologie est sa capacité à s'adapter à différents contextes tout en maintenant ses principes fondamentaux d'équilibre et d'efficacité."
              ]
            },
            {
              title: "Phase 1 : Audit et Analyse Approfondie",
              content: [
                "L'audit initial est crucial pour comprendre l'état actuel de votre application et identifier les opportunités d'optimisation. Cette phase comprend :",
                "Analyse Technique :",
                "• Évaluation complète de la configuration Vite",
                "• Analyse des dépendances et de leur impact",
                "• Étude des patterns de développement",
                "• Identification des goulots d'étranglement",
                "Analyse Métier :",
                "• Compréhension des objectifs commerciaux",
                "• Évaluation des besoins utilisateurs",
                "• Analyse des contraintes spécifiques",
                "• Définition des KPIs de performance"
              ]
            },
            {
              title: "Phase 2 : Planification Stratégique",
              content: [
                "La planification est essentielle pour garantir une optimisation efficace et sans risque. Cette phase inclut :",
                "Définition des Objectifs :",
                "• Établissement des cibles de performance",
                "• Identification des priorités d'optimisation",
                "• Définition des critères de succès",
                "• Création d'un calendrier d'implémentation",
                "Élaboration du Plan d'Action :",
                "• Sélection des techniques d'optimisation appropriées",
                "• Évaluation des risques potentiels",
                "• Définition des procédures de test",
                "• Planification des points de contrôle"
              ]
            },
            {
              title: "Phase 3 : Implémentation Progressive",
              content: [
                "L'implémentation est réalisée de manière méthodique pour garantir la stabilité de l'application. Cette phase comprend :",
                "Optimisations Techniques :",
                "• Configuration optimale de Vite",
                "• Mise en place du code splitting",
                "• Optimisation des imports dynamiques",
                "• Amélioration du tree shaking",
                "Optimisations Avancées :",
                "• Implémentation du lazy loading",
                "• Optimisation des assets",
                "• Configuration du caching",
                "• Mise en place de la précharge"
              ]
            },
            {
              title: "Phase 4 : Monitoring et Optimisation Continue",
              content: [
                "Le suivi post-implémentation est crucial pour maintenir les performances dans le temps :",
                "Surveillance Continue :",
                "• Monitoring des métriques de performance",
                "• Analyse des retours utilisateurs",
                "• Suivi des KPIs définis",
                "• Détection des régressions",
                "Ajustements et Améliorations :",
                "• Optimisations itératives",
                "• Adaptation aux nouveaux besoins",
                "• Mise à jour des meilleures pratiques",
                "• Formation continue des équipes"
              ]
            },
            {
              title: "Résultats et Bénéfices",
              content: [
                "L'application de notre méthodologie apporte des bénéfices mesurables :",
                "Améliorations Techniques :",
                "• Réduction de 60% des temps de chargement",
                "• Diminution de 40% de la taille des bundles",
                "• Amélioration de 50% des scores Core Web Vitals",
                "Bénéfices Business :",
                "• Augmentation du taux de conversion",
                "• Réduction du taux de rebond",
                "• Amélioration de l'engagement utilisateur",
                "• ROI positif sur l'investissement en optimisation"
              ]
            }
          ]
        };
      // ... Autres cas pour les autres articles
      default:
        return {
          sections: [
            {
              title: "L'Approche ViteButNotTooMuch",
              content: [
                "ViteButNotTooMuch représente une approche équilibrée de l'optimisation Vite. Notre méthodologie unique permet aux entreprises d'améliorer significativement les performances de leurs applications tout en maintenant toutes les fonctionnalités essentielles à leur activité.",
                "Nous comprenons que chaque milliseconde compte dans l'expérience utilisateur, mais nous savons également que les fonctionnalités de votre application sont cruciales pour votre entreprise. C'est pourquoi ViteButNotTooMuch se concentre sur l'optimisation intelligente, ciblant les améliorations qui offrent le meilleur rapport impact/effort."
              ]
            },
            {
              title: "Optimisation Équilibrée avec ViteButNotTooMuch",
              content: [
                "Notre approche d'optimisation repose sur plusieurs piliers fondamentaux :",
                "• Configuration optimale de Vite sans complexité excessive",
                "• Stratégies de chargement intelligent adaptées à vos besoins",
                "• Optimisation des dépendances sans compromettre la maintenabilité",
                "• Amélioration des performances tout en préservant l'expérience utilisateur",
                "Chaque aspect est soigneusement équilibré pour garantir des résultats optimaux."
              ]
            }
          ]
        };
    }
  };

  const articleContent = getArticleContent();

  return (
    <>
      <SEOHead 
        title={`${post.title} | ViteButNotTooMuch`}
        description={post.excerpt}
      />
      
      <div className="pt-24 bg-gray-50">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <article>
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              <div className="flex items-center text-gray-600 mb-8">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                {post.excerpt}
              </p>

              {articleContent.sections.map((section, index) => (
                <section key={index} className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {section.title}
                  </h2>
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}

              {/* Section Articles Connexes */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Articles Connexes</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <a 
                      key={relatedPost.slug}
                      href={`#blog/post/${relatedPost.slug}`}
                      className="group"
                    >
                      <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                          src={relatedPost.imageUrl} 
                          alt={relatedPost.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-2">
                            {relatedPost.date}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href="#blog" 
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  ← Retour au blog
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default BlogPost;