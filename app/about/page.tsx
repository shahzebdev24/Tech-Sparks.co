import Image from 'next/image';
import { Section, Container, Heading, Text, Badge, GradientText, StatCard, CTACard, SectionHeader, DarkPageLayout } from '@/components/ui';
import AboutValues from '@/components/sections/about/AboutValues';
import AboutCTAButtons from '@/components/sections/about/AboutCTAButtons';
import AboutHeroBackground from './AboutHeroBackground';
import AboutHeroHeader from './AboutHeroHeader';
import AboutValuesBackground from './AboutValuesBackground';
import AboutTeamBackground from './AboutTeamBackground';
import AboutTeamHeader from './AboutTeamHeader';
import AboutCTABackground from './AboutCTABackground';
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
      <Section bg="none" spacing="none" className="relative overflow-hidden bg-[var(--section-bg)] dark:bg-[var(--color-darker-bg)]">
        <AboutHeroBackground />

        {/* Content with proper padding */}
        <div className="relative py-24 lg:py-32 z-10">
          <Container>
          <AboutHeroHeader />
          </Container>
        </div>
      </Section>

      {/* Values Section */}
      <Section bg="none" spacing="none" className="relative overflow-hidden bg-[var(--section-bg)] dark:bg-[var(--color-darker-bg)]">
        <AboutValuesBackground />

        {/* Content with proper padding */}
        <div className="relative py-24 lg:py-32 z-10">
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
        </div>
      </Section>

      {/* Team/Karachi Section */}
      <Section bg="none" spacing="none" className="relative overflow-hidden bg-[var(--section-bg)] dark:bg-[var(--color-darker-bg)]">
        <AboutTeamBackground />

        {/* Content with proper padding */}
        <div className="relative py-24 lg:py-32 z-10">
          <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <AboutTeamHeader />
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
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="none" spacing="none" className="relative overflow-hidden bg-[var(--section-bg)] dark:bg-[var(--color-darker-bg)]">
        <AboutCTABackground />

        {/* Content with proper padding */}
        <div className="relative py-24 lg:py-32 z-10">
          <Container>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Left Side - Image */}
              <div className="lg:w-1/2 relative">
                <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/letstart.jpg"
                    alt="Digital Excellence"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-transparent to-purple-600/20" />
                  
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
              </div>

              {/* Right Side - Content */}
              <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                  <span className="text-indigo-300 text-xs font-bold tracking-widest uppercase">Let's Talk</span>
                </div>

                <Heading level={2} className="text-4xl lg:text-5xl font-extrabold !text-white leading-tight tracking-tight">
                  Ready to <GradientText variant="indigo-purple">scale your next idea?</GradientText>
                </Heading>

                <Text className="text-gray-300 text-lg leading-relaxed">
                  Join the ambitious businesses that trust Tech Sparks to drive their technological growth. 
                  Let's transform your vision into a powerful digital reality.
                </Text>

                {/* Features list */}
                <div className="space-y-3">
                  {[
                    'Free consultation & project scoping',
                    'Transparent pricing & timeline',
                    'Dedicated engineering team',
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                        <svg className="w-3 h-3 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <Text className="text-gray-300 font-medium">{feature}</Text>
                    </div>
                  ))}
                </div>

                <AboutCTAButtons />
              </div>
            </div>
          </Container>
        </div>
      </Section>
    </DarkPageLayout>
  );
}
