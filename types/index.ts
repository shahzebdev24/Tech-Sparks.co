export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  link?: string; // e.g. for Home component
  impact?: string; // e.g. for Portfolio component
  slug?: string; // e.g. for Portfolio component
}

export interface PricingPlan {
  name: string;
  price: string;
  subtext?: string;
  description?: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
  popular?: boolean;
  variant?: 'default' | 'primary' | 'dark' | 'glass';
  ctaHref?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  calendarLink?: string;
}
