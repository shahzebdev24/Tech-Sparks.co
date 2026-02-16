'use client';

import { Section, Container, Heading, Text, Badge, PricingCard, GradientText, SectionHeader } from '@/components/ui';
import { pricingSectionPlans } from '@/content/pricing';

export default function Pricing() {
    return (
        <Section id="pricing" bg="dark-pricing">
            <Container>
                {/* Header */}
                <SectionHeader
                    badge="Value Proposition"
                    title={<>Transparent, result-driven <GradientText variant="indigo-purple">pricing</GradientText></>}
                    description="Choose the perfect strategic partnership level for your business needs. No hidden fees, just pure engineering excellence."
                    headingLevel={2}
                    align="center"
                    maxWidth="md"
                    className="mb-16 lg:mb-20"
                />

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch max-lg:px-4">
                    {pricingSectionPlans.map((plan, index) => (
                        <PricingCard key={plan.name} plan={plan} align="center" className="h-full" delay={index * 0.1} />
                    ))}
                </div>
            </Container>
        </Section>
    );
}

