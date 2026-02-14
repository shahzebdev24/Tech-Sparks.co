import type { Metadata } from 'next';

/** Base URL for the site */
export const SITE_URL = 'https://techsparks.co';

/** Default SEO metadata shared across all pages */
export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Tech Sparks — Premium Software, Engineered for Growth',
    template: '%s | Tech Sparks',
  },
  description:
    'Tech Sparks is a premium software agency building custom web applications, SaaS platforms, and digital products for startups and enterprises. Based in Karachi, delivering globally.',
  keywords: [
    'software agency',
    'web development',
    'custom web applications',
    'SaaS development',
    'UI/UX design',
    'Next.js development',
    'React development',
    'software house Karachi',
    'premium software development',
    'digital product development',
  ],
  authors: [{ name: 'Tech Sparks', url: SITE_URL }],
  creator: 'Tech Sparks',
  publisher: 'Tech Sparks',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Tech Sparks',
    title: 'Tech Sparks — Premium Software, Engineered for Growth',
    description:
      'We partner with startups, SMBs, and enterprises to design and build custom web applications, SaaS platforms, and digital products that drive real, measurable results.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tech Sparks — Premium Software Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Sparks — Premium Software, Engineered for Growth',
    description:
      'Premium software agency building custom web apps, SaaS platforms, and digital products. Based in Karachi, delivering globally.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: SITE_URL,
  },
};

/**
 * Generate page-specific metadata by merging with defaults.
 */
export function createPageMetadata(overrides: Partial<Metadata> & { path?: string }): Metadata {
  const { path, ...rest } = overrides;
  const canonical = path ? `${SITE_URL}${path}` : SITE_URL;

  return {
    ...rest,
    alternates: {
      canonical,
      ...rest.alternates,
    },
    openGraph: {
      ...DEFAULT_METADATA.openGraph,
      url: canonical,
      ...(rest.openGraph as Record<string, unknown>),
    },
  };
}

/**
 * JSON-LD structured data for Organization
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tech Sparks',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description:
      'Premium software agency building custom web applications, SaaS platforms, and digital products for startups and enterprises.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karachi',
      addressCountry: 'PK',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'techsparks.co@gmail.com',
    },
    sameAs: [],
  };
}

/**
 * JSON-LD structured data for WebSite
 */
export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tech Sparks',
    url: SITE_URL,
    description:
      'Premium software agency building custom web applications, SaaS platforms, and digital products.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * JSON-LD for a Service offering
 */
export function getServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Tech Sparks',
      url: SITE_URL,
    },
    url: service.url,
  };
}
