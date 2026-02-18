import { Section, Container, Heading, Text } from '@/components/ui';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Privacy Policy | Tech Sparks',
  description: 'Our privacy policy outlines how we collect, use, and protect your personal information.',
  path: '/privacy',
});

export default function PrivacyPage() {
  const lastUpdated = 'February 13, 2026';

  return (
    <div className="pt-24 min-h-screen bg-[var(--page-bg)]">
      <Section bg="none" spacing="md" className="bg-[var(--section-bg)] text-[var(--text-primary)]">
        <Container size="md">
          <Heading level={1} className="mb-4 text-[var(--text-primary)]">Privacy Policy</Heading>
          <Text className="mb-12 text-[var(--text-secondary)]">Last Updated: {lastUpdated}</Text>

          <div className="prose prose-indigo max-w-none space-y-10 dark:prose-invert prose-headings:text-[var(--text-primary)] prose-p:text-[var(--text-secondary)] prose-li:text-[var(--text-secondary)]">
            <div>
              <Heading level={3} className="mb-4 text-[var(--text-primary)]">1. Introduction</Heading>
              <Text className="text-[var(--text-secondary)]">
                At Tech Sparks, we take your privacy seriously. This Privacy Policy 
                explains how we collect, use, and protect your personal 
                information when you visit our website or use our services.
              </Text>
            </div>

            <div>
              <Heading level={3} className="mb-4 text-[var(--text-primary)]">2. Information We Collect</Heading>
              <Text className="mb-4 text-[var(--text-secondary)]">
                We may collect the following types of information:
              </Text>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)] font-medium text-lg">
                <li>Personal identifiers (name, email address, phone number) provided via our contact forms.</li>
                <li>Usage data (IP address, browser type, pages visited) via cookies and analytics.</li>
                <li>Professional information (company name, project details) provided during consultation.</li>
              </ul>
            </div>

            <div>
              <Heading level={3} className="mb-4 text-[var(--text-primary)]">3. How We Use Your Information</Heading>
              <Text className="text-[var(--text-secondary)]">
                We use your information to respond to inquiries, provide our 
                software development services, improve our website performance, 
                and comply with legal obligations. We do not sell your personal 
                data to third parties.
              </Text>
            </div>

            <div>
              <Heading level={3} className="mb-4 text-[var(--text-primary)]">4. Data Security</Heading>
              <Text className="text-[var(--text-secondary)]">
                We implement industry-standard security measures to protect your 
                data from unauthorized access or disclosure. However, no 
                transmission over the internet is 100% secure.
              </Text>
            </div>

            <div>
              <Heading level={3} className="mb-4 text-[var(--text-primary)]">5. Contact Us</Heading>
              <Text className="text-[var(--text-secondary)]">
                If you have questions about this Privacy Policy, please contact 
                us at techsparks.co@gmail.com.
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
