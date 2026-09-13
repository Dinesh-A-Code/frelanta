export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  href: string;
  github: string;
  tags: string[];
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'sd-flowers',
    title: 'SD Flowers',
    category: 'Website / E-commerce',
    year: '2026',
    description:
      'A bespoke digital storefront and ordering platform for a boutique handmade crochet studio. Features curated product discovery, responsive visual cataloging, and direct WhatsApp commerce workflow.',
    image: '/projects/sd-flowers/screen.png',
    href: 'https://sd-flowers.vercel.app/',
    github: 'https://github.com/Dinesh-A-Code/sd-flowers',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Commerce'],
    featured: true,
  },
  {
    id: 'ledgerpilot',
    title: 'LedgerPilot',
    category: 'Web Application / FinTech AI',
    year: '2026',
    description:
      'Deterministic financial reconciliation engine and AI-assisted investigation agent built for complex multi-source transaction matching, audit trails, and automated exception resolution.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    href: 'https://github.com/Dinesh-A-Code/LedgerPilot',
    github: 'https://github.com/Dinesh-A-Code/LedgerPilot',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Gemini AI', 'FinTech'],
    featured: true,
  },
  {
    id: 'phishsite',
    title: 'PhishSite',
    category: 'Web Application / Cybersecurity',
    year: '2026',
    description:
      'Browser-based email origin classifier and security triage tool providing real-time suspicious-content detection, SPF/DKIM/DMARC authentication inspection, and Gmail integration.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80',
    href: 'https://github.com/Dinesh-A-Code/PhishSite',
    github: 'https://github.com/Dinesh-A-Code/PhishSite',
    tags: ['Web Security', 'JavaScript', 'Email Protocols', 'UI/UX'],
    featured: false,
  },
];

export const STUDIO_CONFIG = {
  name: 'FRELANTA',
  tagline: 'Independent digital studio.',
  contactEmail: 'hello@yourdomain.com', // Replaceable studio contact email
  location: 'Based in India. Working globally.',
  socials: {
    github: 'https://github.com/Dinesh-A-Code',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
};
