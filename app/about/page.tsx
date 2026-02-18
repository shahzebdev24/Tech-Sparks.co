import Image from 'next/image';
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
      <Section bg="none" spacing="none" className="relative overflow-hidden bg-[var(--color-darker-bg)]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/abouthero.jpeg"
            alt="About Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-darker-bg)] via-transparent to-[var(--color-darker-bg)] opacity-95" />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        {/* Content with proper padding */}
        <div className="relative py-24 lg:py-32 z-10">
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
        </div>
      </Section>

      {/* Values Section */}
      <Section bg="none" spacing="none" className="relative overflow-hidden bg-[var(--color-darker-bg)]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/valuegradient.jpeg"
            alt="Values Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-darker-bg)] via-transparent to-[var(--color-darker-bg)] opacity-95" />
          <div className="absolute inset-0 bg-black/65" />
        </div>

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
      <Section bg="none" spacing="none" className="relative overflow-hidden bg-[var(--color-darker-bg)]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/teamgradient.jpeg"
            alt="Team Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-darker-bg)] via-transparent to-[var(--color-darker-bg)] opacity-95" />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        {/* Content with proper padding */}
        <div className="relative py-24 lg:py-32 z-10">
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
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="none" spacing="none" className="relative overflow-hidden bg-[var(--color-darker-bg)]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/ctagradient.jpeg"
            alt="CTA Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-darker-bg)] via-transparent to-[var(--color-darker-bg)] opacity-95" />
          <div className="absolute inset-0 bg-black/75" />
        </div>

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

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    href="/contact" 
                    variant="primary" 
                    size="lg"
                    className="group relative overflow-hidden"
                  >
                    <span className="relative z-10">Start Your Project</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                  <Button 
                    href="/portfolio" 
                    variant="outline" 
                    size="lg"
                    className="border-white/20 hover:border-white/40"
                  >
                    View Our Work
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Section>
    </DarkPageLayout>
  );
}
