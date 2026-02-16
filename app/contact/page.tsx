

import Contact from '@/components/sections/contact/Contact';
import { createPageMetadata, getContactPageSchema } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Contact Us',
  description: 'Get in touch with Tech Sparks for your next custom software project. We build premium web apps and SaaS platforms.',
  path: '/contact',
});

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[var(--color-darker-bg)]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getContactPageSchema()) }}
            />
            <Contact variant="page" showLocationBlock className="pt-20" />
        </main>
    );
}

