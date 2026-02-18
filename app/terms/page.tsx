import { Section, Container, Heading, Text } from '@/components/ui';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Terms of Service | Tech Sparks',
  description: 'Our terms of service agreement for using the Tech Sparks website and services.',
  path: '/terms',
});

export default function TermsPage() {
  const lastUpdated = 'February 13, 2026';

  return (
    <div className="pt-24 min-h-screen bg-[var(--page-bg)]">
      <Section bg="none" spacing="md" className="bg-[var(--section-bg)] text-[var(--text-primary)]">
        <Container size="md">
          <Heading level={1} className="mb-4 text-[var(--text-primary)]">Terms of Service</Heading>
          <Text className="mb-12 text-[var(--text-secondary)]">Last Updated: {lastUpdated}</Text>

          <div className="prose prose-indigo max-w-none space-y-10 dark:prose-invert prose-headings:text-[var(--text-primary)] prose-p:text-[var(--text-secondary)] prose-li:text-[var(--text-secondary)]">
            <div>
              <Heading level={3} className="mb-4 text-[var(--text-primary)]">1. Agreement to Terms</Heading>
              <Text className="text-[var(--text-secondary)]">
                By accessing or using the Tech Sparks website, you agree to be 
                bound by these Terms of Service. If you do not agree, please 
                do not use our site.
              </Text>
            </div>

            <div>
              <Heading level={3} className="mb-4 text-[var(--text-primary)]">2. Intellectual Property</Heading>
              <Text className="text-[var(--text-secondary)]">
                The content on this website, including text, graphics, logos, 
                and code, is the property of Tech Sparks and is protected by 
                copyright and other intellectual property laws.
              </Text>
            </div>

            <div>
              <Heading level={3} className="mb-4 text-[var(--text-primary)]">3. Use of Services</Heading>
              <Text className="text-[var(--text-secondary)]">
                Our services are provided on a project-by-project basis, 
                governed by separate Master Service Agreements (MSA) signed with 
                our clients. The content on this site is for informational 
                purposes.
              </Text>
            </div>

            <div>
              <Heading level={3} className="mb-4 text-[var(--text-primary)]">4. Limitation of Liability</Heading>
              <Text className="text-[var(--text-secondary)]">
                Tech Sparks will not be liable for any indirect, incidental, or 
                consequential damages arising from your use of this website.
              </Text>
            </div>

            <div>
              <Heading level={3} className="mb-4 text-[var(--text-primary)]">5. Governing Law</Heading>
              <Text className="text-[var(--text-secondary)]">
                These terms are governed by the laws of Pakistan. Any disputes 
                shall be resolved in the courts of Karachi.
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
