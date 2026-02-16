'use client';

import { Section, Container, Heading, Text, Badge, PricingCard } from '@/components/ui';
import { pricingSectionPlans } from '@/content/pricing';

export default function Pricing() {
    return (
        <Section id="pricing" bg="dark-pricing">
            <Container>
                {/* Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <Badge variant="glass" className="mb-4">Value Proposition</Badge>
                    <Heading level={2} className="!text-white mb-6">
                        Transparent, result-driven <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">pricing</span>
                    </Heading>
                    <Text className="text-gray-400 max-w-2xl mx-auto text-lg font-medium">
                        Choose the perfect strategic partnership level for your business 
                        needs. No hidden fees, just pure engineering excellence.
                    </Text>
                </div>

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

