

import { Section, Container, Heading, Text, Badge, Button, PricingCard } from '@/components/ui';
import { pricingPagePlans } from '@/content/pricing';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Pricing',
  description: 'Transparent pricing for custom software development. Choose from fixed packages or custom enterprise solutions.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <div className="bg-[var(--color-darker-bg)] min-h-screen">
      <Section bg="dark-pricing" spacing="lg">
        <Container>
          <div className="max-w-3xl mb-16 lg:mb-20">
            <Badge variant="glass" className="mb-4">Pricing Model</Badge>
            <Heading level={1} className="!text-white mb-8 tracking-tighter">
              Transparent pricing,{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                premium value
              </span>
            </Heading>
            <Text className="text-white text-lg font-medium leading-relaxed">
              We focus on delivering high-impact results with clear, predefined 
              budgets and timelines. No surprises, just professional software.
            </Text>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPagePlans.map((plan, index) => (
                  <PricingCard key={plan.name} plan={plan} align="left" delay={index * 0.1} />
            ))}
          </div>

          <div className="mt-20 p-8 sm:p-12 bg-white/[0.02] rounded-[3rem] border border-white/5 text-center glossy-card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 pointer-events-none" />
            <Heading level={3} className="!text-white mb-4">Need something specific?</Heading>
            <Text className="text-gray-400 mb-8 max-w-xl mx-auto font-medium">We offer custom packages for long-term enterprise projects and platform migrations.</Text>
            <Button variant="outline" href="/contact" className="border-white/10 text-white hover:bg-white/10 metallic-shine">Book a consultation</Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}

