import { Section, Container, Heading, Text, Badge, Button } from '@/components/ui';
import AboutValues from '@/components/sections/about/AboutValues';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'About Us',
  description: 'Learn about Tech Sparks, our values, and our mission. We are a team of passionate engineers building software for growth.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-darker-bg)] min-h-screen">
      {/* Hero Section - Uses H1 */}
      <Section bg="dark-constellation" spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge variant="glass" className="mb-6">Our Story</Badge>
            <Heading level={1} className="!text-white mb-8 tracking-tighter">
              Engineering software that{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">measurably accelerates</span> growth
            </Heading>
            <Text className="text-gray-300 text-xl font-medium leading-relaxed mb-12">
              Tech Sparks was founded on a simple belief: modern businesses 
              deserve more than just code. They deserve a strategic partner 
              who understands their goals and builds the technology to reach them.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section bg="dark-constellation" spacing="lg">
        <Container>
          <div className="text-center mb-16 lg:mb-20">
            <Badge variant="glass" className="mb-4">Our DNA</Badge>
            <Heading level={2} className="!text-white mb-6">
              The principles that{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-indigo-500 bg-clip-text text-transparent">guide us</span>
            </Heading>
          </div>
          <AboutValues />
        </Container>
      </Section>

      {/* Team/Karachi Section */}
      <Section bg="dark-constellation" spacing="lg">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <Badge variant="glass" className="mb-4">Global Reach, Local Base</Badge>
              <Heading level={2} className="!text-white mb-8">
                Based in Karachi,{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">delivering for the world</span>
              </Heading>
              <Text className="text-gray-300 text-lg font-medium leading-relaxed mb-6">
                From our engineering hub in Pakistan, we deliver world-class 
                software solutions to startups and enterprises across the globe.
              </Text>
              <Text className="text-gray-300 mb-10 leading-relaxed">
                Our team consists of passionate engineers, designers, and 
                strategists who share a common goal: building technology that 
                makes a difference.
              </Text>
              <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8">
                <div className="p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] bg-white/12 backdrop-blur-md border border-white/15 metallic-shine">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">2026</div>
                  <p className="text-gray-300 font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em]">Founded</p>
                </div>
                <div className="p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] bg-white/12 backdrop-blur-md border border-white/15 metallic-shine">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">Premium</div>
                  <p className="text-gray-300 font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em]">Standards</p>
                </div>
                <div className="p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] bg-white/12 backdrop-blur-md border border-white/15 metallic-shine">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">Growth</div>
                  <p className="text-gray-300 font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em]">Obsessed</p>
                </div>
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
          <div className="bg-gradient-to-br from-indigo-900/40 via-[var(--color-darker-bg)] to-purple-950/30 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden border border-white/5 glossy-card">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -mr-48 -mt-48 animate-pulse" />
            <div className="relative z-10">
              <Heading level={2} className="!text-white mb-6">
                Ready to{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">scale your next idea?</span>
              </Heading>
              <Text className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto font-medium">
                Join the ambitious businesses that trust Tech Sparks to drive 
                their technological growth.
              </Text>
              <Button size="lg" variant="primary" href="/contact" className="glossy-button">
                Start Your Project
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
