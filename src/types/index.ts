export interface NavItem {
  label: string;
  href: string;
}

export interface MetaData {
  title: string;
  description: string;
  keywords: string[];
}

export interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export interface ServiceProps {
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
}

export interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  imageUrl: string;
  author: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}