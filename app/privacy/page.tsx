'use client';

import { Section, Container, Heading, Text } from '@/components/ui';
import { useState } from 'react';

export default function PrivacyPage() {
  const lastUpdated = 'April 18, 2026';
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-[var(--page-bg)]">
      <Section bg="none" spacing="md" className="bg-[var(--section-bg)] text-[var(--text-primary)]">
        <Container size="md">
          <Heading level={1} className="mb-4 text-[var(--text-primary)]">Privacy Policy</Heading>
          <Text className="mb-4 text-[var(--text-secondary)]">Last Updated: {lastUpdated}</Text>
          <Text className="mb-12 text-[var(--text-secondary)] italic">
            This policy covers Tech Sparks web services and our mobile applications. 
            SabBechdo is our first mobile app release, with more innovative applications coming soon.
          </Text>

          <div className="prose prose-indigo max-w-none space-y-10 dark:prose-invert prose-headings:text-[var(--text-primary)] prose-p:text-[var(--text-secondary)] prose-li:text-[var(--text-secondary)]">
            
            {/* SabBechdo App Privacy Policy */}
            <div className="border-l-4 border-indigo-500 pl-6 mb-12">
              <Heading level={2} className="mb-6 text-[var(--text-primary)]">Privacy Policy for SabBechdo</Heading>
              
              <div className="space-y-8">
                <div>
                  <Heading level={3} className="mb-4 text-[var(--text-primary)]">1. Introduction</Heading>
                  <Text className="text-[var(--text-secondary)]">
                    SabBechdo is a marketplace platform that connects buyers and sellers. This Privacy Policy 
                    explains how we collect, use, and protect your information.
                  </Text>
                </div>

                <div>
                  <Heading level={3} className="mb-4 text-[var(--text-primary)]">2. Information We Collect</Heading>
                  
                  <div className="ml-4 space-y-4">
                    <div>
                      <Heading level={4} className="mb-2 text-[var(--text-primary)] text-lg">2.1 Account Information</Heading>
                      <Text className="mb-2 text-[var(--text-secondary)]">When you create an account, we collect:</Text>
                      <ul className="list-disc pl-6 space-y-1 text-[var(--text-secondary)]">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number (optional)</li>
                        <li>Username (optional)</li>
                        <li>Profile picture (optional)</li>
                      </ul>
                    </div>

                    <div>
                      <Heading level={4} className="mb-2 text-[var(--text-primary)] text-lg">2.2 Location Information</Heading>
                      <ul className="list-disc pl-6 space-y-1 text-[var(--text-secondary)]">
                        <li>City, region, and country (optional, for showing local ads)</li>
                        <li>You can choose to share or hide your location</li>
                      </ul>
                    </div>

                    <div>
                      <Heading level={4} className="mb-2 text-[var(--text-primary)] text-lg">2.3 Content You Create</Heading>
                      <ul className="list-disc pl-6 space-y-1 text-[var(--text-secondary)]">
                        <li>Advertisement listings (title, description, price, category)</li>
                        <li>Photos and videos you upload for your ads</li>
                        <li>Chat messages with other users</li>
                        <li>Reviews and ratings</li>
                        <li>Comments and likes on ads</li>
                      </ul>
                    </div>

                    <div>
                      <Heading level={4} className="mb-2 text-[var(--text-primary)] text-lg">2.4 Authentication Data</Heading>
                      <Text className="mb-2 text-[var(--text-secondary)]">We support login via:</Text>
                      <ul className="list-disc pl-6 space-y-1 text-[var(--text-secondary)]">
                        <li>Email and password</li>
                        <li>Google Sign-In</li>
                        <li>Facebook Login</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <Heading level={3} className="mb-4 text-[var(--text-primary)]">3. How We Use Your Information</Heading>
                  <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                    <li>To create and manage your account</li>
                    <li>To display your advertisements to potential buyers</li>
                    <li>To enable communication between buyers and sellers through chat</li>
                    <li>To show relevant local ads based on your location (if provided)</li>
                    <li>To send notifications about messages, likes, and comments (based on your preferences)</li>
                    <li>To improve our services and user experience</li>
                  </ul>
                </div>

                <div>
                  <Heading level={3} className="mb-4 text-[var(--text-primary)]">4. App Permissions</Heading>
                  
                  <div className="ml-4 space-y-3">
                    <div>
                      <Heading level={4} className="mb-2 text-[var(--text-primary)] text-lg">4.1 Camera</Heading>
                      <Text className="text-[var(--text-secondary)]">
                        Used to take photos for your advertisements and profile picture.
                      </Text>
                    </div>

                    <div>
                      <Heading level={4} className="mb-2 text-[var(--text-primary)] text-lg">4.2 Photo Library</Heading>
                      <Text className="text-[var(--text-secondary)]">
                        Used to select and upload images and videos for your listings.
                      </Text>
                    </div>

                    <div>
                      <Heading level={4} className="mb-2 text-[var(--text-primary)] text-lg">4.3 Audio Recording</Heading>
                      <Text className="text-[var(--text-secondary)]">
                        Used when recording videos with sound for advertisements.
                      </Text>
                    </div>

                    <div>
                      <Heading level={4} className="mb-2 text-[var(--text-primary)] text-lg">4.4 Location (Optional)</Heading>
                      <Text className="text-[var(--text-secondary)]">
                        Used to show your general location (city/region) on ads if you choose to share it.
                      </Text>
                    </div>
                  </div>
                </div>

                <div>
                  <Heading level={3} className="mb-4 text-[var(--text-primary)]">5. Data Storage</Heading>
                  <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                    <li>Your account data is stored securely on our servers</li>
                    <li>Authentication tokens are stored locally on your device</li>
                    <li>We use Firebase Authentication for secure login</li>
                  </ul>
                </div>

                <div>
                  <Heading level={3} className="mb-4 text-[var(--text-primary)]">6. Data Sharing</Heading>
                  <Text className="mb-2 text-[var(--text-secondary)]">
                    We do not sell your personal information. Your data is shared only:
                  </Text>
                  <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                    <li>With other users (your public profile, ads, and messages you send)</li>
                    <li>With service providers who help us operate the platform</li>
                    <li>When required by law</li>
                  </ul>
                </div>

                <div>
                  <Heading level={3} className="mb-4 text-[var(--text-primary)]">7. Your Privacy Controls</Heading>
                  <Text className="mb-2 text-[var(--text-secondary)]">You can control:</Text>
                  <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                    <li>Notification preferences (chat, likes, comments, follows)</li>
                    <li>Whether to display your location on ads</li>
                    <li>Theme preference (light/dark mode)</li>
                    <li>Your profile visibility</li>
                  </ul>
                </div>

                <div>
                  <Heading level={3} className="mb-4 text-[var(--text-primary)]">8. Your Rights</Heading>
                  <Text className="mb-2 text-[var(--text-secondary)]">You have the right to:</Text>
                  <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                    <li>Access your personal data</li>
                    <li>Update your profile information</li>
                    <li>Delete your account and all associated data</li>
                    <li>Turn off notifications</li>
                    <li>Request a copy of your data</li>
                  </ul>
                </div>

                <div>
                  <Heading level={3} className="mb-4 text-[var(--text-primary)]">9. Data Security</Heading>
                  <Text className="mb-2 text-[var(--text-secondary)]">
                    We implement security measures to protect your information, including:
                  </Text>
                  <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                    <li>Encrypted authentication tokens</li>
                    <li>Secure server infrastructure</li>
                    <li>Regular security updates</li>
                  </ul>
                </div>

                <div>
                  <Heading level={3} className="mb-4 text-[var(--text-primary)]">10. Children&apos;s Privacy</Heading>
                  <Text className="text-[var(--text-secondary)]">
                    Our service is not intended for users under 13 years of age.
                  </Text>
                </div>

                <div>
                  <Heading level={3} className="mb-4 text-[var(--text-primary)]">11. Third-Party Services</Heading>
                  <Text className="mb-2 text-[var(--text-secondary)]">We use:</Text>
                  <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                    <li>Firebase (Google) for authentication</li>
                    <li>Facebook Login (optional)</li>
                    <li>Google Sign-In (optional)</li>
                  </ul>
                  <Text className="mt-2 text-[var(--text-secondary)]">
                    Please review their privacy policies for more information.
                  </Text>
                </div>

                <div>
                  <Heading level={3} className="mb-4 text-[var(--text-primary)]">12. Data Retention</Heading>
                  <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                    <li>Active accounts: Data retained while account is active</li>
                    <li>Deleted accounts: Data permanently deleted within 30 days</li>
                  </ul>
                </div>

                <div>
                  <Heading level={3} className="mb-4 text-[var(--text-primary)]">13. Changes to This Policy</Heading>
                  <Text className="text-[var(--text-secondary)]">
                    We may update this Privacy Policy. Significant changes will be notified through the app.
                  </Text>
                </div>

                <div>
                  <Heading level={3} className="mb-4 text-[var(--text-primary)]">14. Contact Us</Heading>
                  <Text className="text-[var(--text-secondary)]">
                    For questions or concerns about this Privacy Policy:
                  </Text>
                  <Text className="mt-2 text-[var(--text-secondary)]">
                    Email: techsparks.co@gmail.com
                  </Text>
                  <Text className="mt-4 text-[var(--text-secondary)] font-semibold">
                    By using SabBechdo, you agree to this Privacy Policy.
                  </Text>
                </div>
              </div>
            </div>

            {/* General Tech Sparks Privacy Policy */}
            <div className="border-t-2 border-gray-300 dark:border-gray-700 pt-12">
              <Heading level={2} className="mb-6 text-[var(--text-primary)]">General Privacy Policy for Tech Sparks Services</Heading>
              
              <div className="space-y-8">
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
                  <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
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
                  <Heading level={3} className="mb-4 text-[var(--text-primary)]">5. Future Applications</Heading>
                  <Text className="text-[var(--text-secondary)]">
                    As we continue to develop and release new mobile applications and services, 
                    this privacy policy will be updated to reflect the data practices of each new product. 
                    Users will be notified of significant changes through our applications and website.
                  </Text>
                </div>

                <div>
                  <Heading level={3} className="mb-4 text-[var(--text-primary)]">6. Contact Us</Heading>
                  <Text className="text-[var(--text-secondary)]">
                    If you have questions about this Privacy Policy, please contact 
                    us at techsparks.co@gmail.com.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
