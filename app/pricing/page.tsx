

import { Section, Container, Heading, Text, Badge, Button, PricingCard, GradientText, CTACard, SectionHeader, DarkPageLayout } from '@/components/ui';
import { pricingPagePlans } from '@/content/pricing';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Pricing',
  description: 'Transparent pricing for custom software development. Choose from fixed packages or custom enterprise solutions.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <DarkPageLayout>
      <Section bg="dark-pricing" spacing="lg">
        <Container>
          <SectionHeader
            badge="Pricing Model"
            title={<>Transparent pricing, <GradientText variant="indigo-via-purple-indigo">premium value</GradientText></>}
            description="We focus on delivering high-impact results with clear, predefined budgets and timelines. No surprises, just professional software."
            headingLevel={1}
            align="left"
            maxWidth="lg"
            className="mb-16 lg:mb-20"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPagePlans.map((plan, index) => (
                  <PricingCard key={plan.name} plan={plan} align="left" delay={index * 0.1} />
            ))}
          </div>

          <CTACard 
            variant="card"
            title="Need something specific?"
            description="We offer custom packages for long-term enterprise projects and platform migrations."
            buttonText="Book a consultation"
            buttonHref="/contact"
            className="mt-20"
          />
        </Container>
      </Section>
    </DarkPageLayout>
  );
}

