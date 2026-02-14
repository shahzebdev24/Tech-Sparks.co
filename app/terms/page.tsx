'use client';

import { Section, Container, Heading, Text } from '@/components/ui';

export default function TermsPage() {
  const lastUpdated = 'February 13, 2026';

  return (
    <div className="pt-24">
      <Section bg="white" spacing="md">
        <Container size="md">
          <Heading level={1} className="mb-4">Terms of Service</Heading>
          <Text className="mb-12">Last Updated: {lastUpdated}</Text>

          <div className="prose prose-indigo max-w-none space-y-10">
            <div>
              <Heading level={3} className="mb-4">1. Agreement to Terms</Heading>
              <Text>
                By accessing or using the Tech Sparks website, you agree to be 
                bound by these Terms of Service. If you do not agree, please 
                do not use our site.
              </Text>
            </div>

            <div>
              <Heading level={3} className="mb-4">2. Intellectual Property</Heading>
              <Text>
                The content on this website, including text, graphics, logos, 
                and code, is the property of Tech Sparks and is protected by 
                copyright and other intellectual property laws.
              </Text>
            </div>

            <div>
              <Heading level={3} className="mb-4">3. Use of Services</Heading>
              <Text>
                Our services are provided on a project-by-project basis, 
                governed by separate Master Service Agreements (MSA) signed with 
                our clients. The content on this site is for informational 
                purposes.
              </Text>
            </div>

            <div>
              <Heading level={3} className="mb-4">4. Limitation of Liability</Heading>
              <Text>
                Tech Sparks will not be liable for any indirect, incidental, or 
                consequential damages arising from your use of this website.
              </Text>
            </div>

            <div>
              <Heading level={3} className="mb-4">5. Governing Law</Heading>
              <Text>
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
