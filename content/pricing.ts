import { PricingPlan } from '@/types';

export const pricingSectionPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '₹49,999',
    subtext: 'One-time payment',
    features: [
      'Custom Website Design',
      'Up to 5 Pages',
      'Responsive Layout',
      'SEO Optimization',
      '3 Months Support'
    ],
    ctaText: 'Choose Plan',
    ctaHref: '/pricing',
    highlighted: false,
    variant: 'dark'
  },
  {
    name: 'Professional',
    price: '₹1,49,999',
    subtext: 'One-time payment',
    features: [
      'Custom Web Application',
      'User Management System',
      'Database Integration',
      'Admin Dashboard',
      'API Development',
      '6 Months Support'
    ],
    ctaText: 'Choose Plan',
    ctaHref: '/pricing',
    highlighted: true,
    variant: 'glass'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    subtext: "Let's discuss",
    features: [
      'Full-Scale Solutions',
      'Unlimited Pages/Features',
      'Advanced Integrations',
      'Dedicated Team',
      'Priority Support',
      '12 Months Support'
    ],
    ctaText: 'Contact Us',
    ctaHref: '/contact',
    highlighted: false,
    variant: 'dark'
  }
];

export const pricingPagePlans: PricingPlan[] = [
  {
    name: 'Discovery & Design',
    price: '$2,500',
    description: 'Perfect for startups needing a high-fidelity prototype and strategic roadmap.',
    features: [
      'Market & Competitor Research',
      'User Flow Mapping',
      'High-Fidelity Figma Mockups',
      'Technical Architecture Plan',
      'Fixed Timeline (2-3 Weeks)',
    ],
    ctaText: 'Start Discovery',
    ctaHref: '/pricing',
    variant: 'default',
  },
  {
    name: 'Product Build',
    price: 'Custom',
    description: 'End-to-end development of your custom software or SaaS platform.',
    features: [
      'Full-Stack Development',
      'UI/UX Design Included',
      'Dedicated Project Manager',
      'Staging & Testing Environment',
      'Regular Milestone Delivery',
      'Post-Launch Support',
    ],
    ctaText: 'Get a Quote',
    ctaHref: '/contact',
    variant: 'primary',
    popular: true,
    highlighted: true
  },
  {
    name: 'Strategic retainer',
    price: '$5,000',
    description: 'Ongoing engineering and design partnership for scaling businesses.',
    features: [
      'Priority Feature Development',
      'Dedicated Weekly Hours',
      'Tech Debt Management',
      'Performance Optimization',
      'Continuous CI/CD Support',
    ],
    ctaText: 'Contact Sales',
    ctaHref: '/contact',
    variant: 'dark',
  },
];
