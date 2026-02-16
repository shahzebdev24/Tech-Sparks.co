import { Section, Container, Heading, Text, Badge, Button, GradientText, StatCard, CTACard, SectionHeader, DarkPageLayout } from '@/components/ui';
import AboutValues from '@/components/sections/about/AboutValues';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'About Us',
  description: 'Learn about Tech Sparks, our values, and our mission. We are a team of passionate engineers building software for growth.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <DarkPageLayout>
      {/* Hero Section - Uses H1 */}
      <Section bg="dark-constellation" spacing="lg">
        <Container>
          <SectionHeader
            badge="Our Story"
            title={<>Engineering software that <GradientText variant="indigo-purple">measurably accelerates</GradientText> growth</>}
            description="Tech Sparks was founded on a simple belief: modern businesses deserve more than just code. They deserve a strategic partner who understands their goals and builds the technology to reach them."
            headingLevel={1}
            align="center"
            maxWidth="xl"
          />
        </Container>
      </Section>

      {/* Values Section */}
      <Section bg="dark-constellation" spacing="lg">
        <Container>
          <SectionHeader
            badge="Our DNA"
            title={<>The principles that <GradientText variant="indigo-indigo">guide us</GradientText></>}
            headingLevel={2}
            align="center"
            className="mb-16 lg:mb-20"
          />
          <AboutValues />
        </Container>
      </Section>

      {/* Team/Karachi Section */}
      <Section bg="dark-constellation" spacing="lg">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <SectionHeader
                badge="Global Reach, Local Base"
                title={<>Based in Karachi, <GradientText variant="indigo-purple">delivering for the world</GradientText></>}
                description="From our engineering hub in Pakistan, we deliver world-class software solutions to startups and enterprises across the globe."
                headingLevel={2}
                align="left"
              />
              <Text className="text-gray-300 mb-10 leading-relaxed">
                Our team consists of passionate engineers, designers, and 
                strategists who share a common goal: building technology that 
                makes a difference.
              </Text>
              <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8">
                <StatCard value="2026" label="Founded" />
                <StatCard value="Premium" label="Standards" />
                <StatCard value="Growth" label="Obsessed" />
              </div>
            </div>
            <div className="lg:w-1/2 relative bg-white/12 backdrop-blur-md rounded-[3rem] aspect-video flex items-center justify-center border border-white/15 shadow-2xl glossy-card">
              <Text className="font-bold text-gray-300 italic text-center px-8">Authentic studio photos & team gallery coming soon</Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section bg="dark-constellation" spacing="lg">
        <Container>
          <CTACard 
            variant="gradient"
            title={<>Ready to <GradientText variant="indigo-purple">scale your next idea?</GradientText></>}
            description="Join the ambitious businesses that trust Tech Sparks to drive their technological growth."
            buttonText="Start Your Project"
            buttonHref="/contact"
          />
        </Container>
      </Section>
    </DarkPageLayout>
  );
}
