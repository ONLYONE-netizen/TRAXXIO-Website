export const siteConfig = {
  name: 'TRAXXIO',
  tagline: 'The Art of Trading.',
  description:
    'TRAXXIO — The Art of Trading. Premium crypto tools, mentorship and community for serious traders.',
  telegram: 'https://t.me/TRAXXIO',
  twitter: 'https://x.com/_TRAXXIO_',
  email: 'officialtraxxio@gmail.com',
  weeklyReport: 'https://traxxionet.netlify.app/week',
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/products', label: 'Products' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export const stats = [
  { num: '500+', label: 'Active Traders' },
  { num: '2+', label: 'Years Running' },
  { num: '3', label: 'Premium Products' },
  { num: '24/7', label: 'Community Access' },
];

export type EventStatus = 'ongoing' | 'upcoming' | 'ended';

export interface EventItem {
  status: EventStatus;
  title: string;
  image?: string;
  meta: string;
  cta?: { label: string; href: string };
  waitlistId?: string;
}

export const events: EventItem[] = [
  {
    status: 'ongoing',
    title: 'TRAXXIO Mentorship A',
    image: 'https://traxxionet.netlify.app/image/IMG-20260408-WA0044.jpg',
    meta: 'Date: April 24th  ·  Platform: TRAXXIO Platform  ·  Time: 8:00 PM — 9:00 PM',
    cta: { label: 'Join Community', href: 'https://t.me/TRAXXIO' },
  },
  {
    status: 'upcoming',
    title: 'VERDICT',
    image: 'https://traxxionet.netlify.app/image/IMG-20260408-WA0050.jpg',
    meta: 'AI-powered trader discipline intelligence. Coming soon.',
    waitlistId: 'verdict-event',
  },
  {
    status: 'upcoming',
    title: 'TRAXXIO Mentorship 2.0',
    meta: 'Track 3 — next cohort coming soon. Registration not yet open.',
    waitlistId: 'mentorship2-event',
  },
  {
    status: 'ended',
    title: 'Memevest 1.0',
    image: 'https://traxxionet.netlify.app/image/memevest.jpg',
    meta: 'Successfully concluded. Thank you to all participants.',
  },
  {
    status: 'ended',
    title: 'TRAXXIO Traders Talk',
    image: 'https://traxxionet.netlify.app/image/IMG-20251129-WA0003.jpg',
    meta: 'Session successfully concluded.',
  },
];

export interface ProductItem {
  slug: string;
  badge: string;
  badgeTone: 'blue' | 'muted' | 'red';
  name: string;
  price: string;
  priceNote?: string;
  unknownPrice?: boolean;
  desc: string;
  features: string[];
  cta?: { label: string; href: string };
  waitlistId?: string;
  waitlistCopy?: string;
  notice?: string;
  featured?: boolean;
  closed?: boolean;
}

export const products: ProductItem[] = [
  {
    slug: 'ebook',
    badge: 'Available Now',
    badgeTone: 'blue',
    name: 'TRAXXIO Ebook',
    price: '$10',
    priceNote: 'one-time',
    desc: 'The foundational trading manual for discipline, psychology, and consistent execution.',
    features: [
      'Emotion control in trading',
      'Discipline as intelligence',
      'Think in probabilities, not certainty',
      'Risk management frameworks',
    ],
    cta: { label: 'Get the Ebook', href: 'https://traxxionet.netlify.app/product1' },
  },
  {
    slug: 'mentorship',
    badge: 'Cohort Closed',
    badgeTone: 'muted',
    name: 'TRAXXIO Mentorship',
    price: '$70',
    priceNote: '/month',
    desc: 'Elite 1-on-1 mentorship program with live sessions, trade reviews, and direct feedback.',
    features: [
      'Weekly live trading sessions',
      '1-on-1 mentoring calls',
      'Trade reviews and feedback',
      'Private community access',
    ],
    notice: 'Current cohort is closed. Mentorship 2.0 opens soon — join the waitlist to be notified first.',
    waitlistId: 'mentorship-product',
    waitlistCopy: 'Be the first to know when Mentorship 2.0 opens.',
    closed: true,
  },
  {
    slug: 'verdict',
    badge: 'Coming Soon',
    badgeTone: 'blue',
    name: 'VERDICT',
    price: 'Pricing — TBA',
    unknownPrice: true,
    desc: 'AI-powered trader discipline intelligence system. VERDICT judges your behavior, not your profit. Built for traders who want to master consistency.',
    features: [
      'AI discipline scoring per trade',
      'Emotional pattern detection',
      'Revenge trading alerts',
      'Weekly discipline reports',
      'Shareable verdict cards',
    ],
    waitlistId: 'verdict-product',
    waitlistCopy: 'Be the first to access VERDICT when it launches.',
    featured: true,
  },
];

export const faqs = [
  {
    q: 'What is TRAXXIO?',
    a: 'TRAXXIO is a trading education and tooling brand built around discipline, not hype. We build products and run mentorship for traders who want a real, repeatable edge — not shortcuts.',
  },
  {
    q: 'Who is the TRAXXIO Ebook for?',
    a: 'Any trader who struggles more with consistency than with strategy. It covers emotional control, risk frameworks, and thinking in probabilities rather than certainty.',
  },
  {
    q: 'When does Mentorship 2.0 open?',
    a: 'The current cohort is closed while we rebuild the program as Mentorship 2.0. Join the waitlist on the Products or Events page and you will be notified the moment registration opens.',
  },
  {
    q: 'What is VERDICT?',
    a: 'VERDICT is an AI-powered discipline intelligence system in development. It scores your trading behavior — not your P&L — to help you catch emotional and revenge-trading patterns before they cost you.',
  },
  {
    q: 'How do I join the community?',
    a: 'Join the TRAXXIO Telegram for live discussion, event announcements, and direct access to the team.',
  },
  {
    q: 'Do you offer financial advice or guaranteed returns?',
    a: 'No. TRAXXIO provides education, tooling, and mentorship around trading discipline. Nothing on this site is financial advice, and trading involves real risk.',
  },
];
