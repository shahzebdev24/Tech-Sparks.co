'use client';

import { Section, Container, Heading, Text } from '@/components/ui';

export default function PrivacyPage() {
  const lastUpdated = 'February 13, 2026';

  return (
    <div className="pt-24">
      <Section bg="white" spacing="md">
        <Container size="md">
          <Heading level={1} className="mb-4">Privacy Policy</Heading>
          <Text className="mb-12">Last Updated: {lastUpdated}</Text>

          <div className="prose prose-indigo max-w-none space-y-10">
            <div>
              <Heading level={3} className="mb-4">1. Introduction</Heading>
              <Text>
                At Tech Sparks, we take your privacy seriously. This Privacy Policy 
                explains how we collect, use, and protect your personal 
                information when you visit our website or use our services.
              </Text>
            </div>

            <div>
              <Heading level={3} className="mb-4">2. Information We Collect</Heading>
              <Text className="mb-4">
                We may collect the following types of information:
              </Text>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 font-medium">
                <li>Personal identifiers (name, email address, phone number) provided via our contact forms.</li>
                <li>Usage data (IP address, browser type, pages visited) via cookies and analytics.</li>
                <li>Professional information (company name, project details) provided during consultation.</li>
              </ul>
            </div>

            <div>
              <Heading level={3} className="mb-4">3. How We Use Your Information</Heading>
              <Text>
                We use your information to respond to inquiries, provide our 
                software development services, improve our website performance, 
                and comply with legal obligations. We do not sell your personal 
                data to third parties.
              </Text>
            </div>

            <div>
              <Heading level={3} className="mb-4">4. Data Security</Heading>
              <Text>
                We implement industry-standard security measures to protect your 
                data from unauthorized access or disclosure. However, no 
                transmission over the internet is 100% secure.
              </Text>
            </div>

            <div>
              <Heading level={3} className="mb-4">5. Contact Us</Heading>
              <Text>
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
