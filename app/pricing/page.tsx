'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Section, Container, Heading, Text, Badge, Button, Card } from '@/components/ui';

const plans = [
  {
    name: 'Discovery & Design',
    price: '$2,500',
    description: 'Perfect for startups needing a high-fidelity prototype and strategic roadmap.',
    features: [
      'Market & Competitor Research',
      'User Flow Mapping',
      'High-Fidelity Figma Mockups',
      'Technical Architecture Plan',
      'Fixed Timeline (2-3 Weeks)',
    ],
    cta: 'Start Discovery',
    variant: 'default',
  },
  {
    name: 'Product Build',
    price: 'Custom',
    description: 'End-to-end development of your custom software or SaaS platform.',
    features: [
      'Full-Stack Development',
      'UI/UX Design Included',
      'Dedicated Project Manager',
      'Staging & Testing Environment',
      'Regular Milestone Delivery',
      'Post-Launch Support',
    ],
    cta: 'Get a Quote',
    variant: 'primary',
    popular: true,
  },
  {
    name: 'Strategic retainer',
    price: '$5,000',
    description: 'Ongoing engineering and design partnership for scaling businesses.',
    features: [
      'Priority Feature Development',
      'Dedicated Weekly Hours',
      'Tech Debt Management',
      'Performance Optimization',
      'Continuous CI/CD Support',
    ],
    cta: 'Contact Sales',
    variant: 'dark',
  },
];

export default function PricingPage() {
  return (
    <div className="bg-[var(--color-darker-bg)] min-h-screen">
      <Section bg="dark-pricing" spacing="lg">
        <Container>
          <div className="max-w-3xl mb-16 lg:mb-20">
            <Badge variant="glass" className="mb-4">Pricing Model</Badge>
            <Heading level={1} className="!text-white mb-8 tracking-tighter">Transparent pricing, premium value</Heading>
            <Text className="text-gray-400 text-lg font-medium leading-relaxed">
              We focus on delivering high-impact results with clear, predefined 
              budgets and timelines. No surprises, just professional software.
            </Text>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card 
                  variant={plan.popular ? 'glass' : 'dark'}
                  className={`h-full flex flex-col relative border-white/5 transition-all duration-500 glossy-card group ${
                    plan.popular ? 'border-indigo-500/30 scale-105 z-10' : 'hover:border-white/10'
                  }`}
                  padding="lg"
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-12 -translate-y-1/2">
                      <Badge variant="primary" className="shadow-lg shadow-indigo-500/20">Most Popular</Badge>
                    </div>
                  )}
                  <div className="mb-8 p-2">
                    <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight group-hover:text-indigo-400 transition-colors uppercase tracking-widest text-[10px]">{plan.name}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-black text-white">{plan.price}</span>
                      {plan.price !== 'Custom' && <span className="text-indigo-300 font-bold self-end text-xs uppercase tracking-widest mb-1">/start</span>}
                    </div>
                    <Text className="text-gray-400 text-sm font-medium leading-relaxed">{plan.description}</Text>
                  </div>

                  <div className="space-y-4 mb-10 flex-1 border-t border-white/5 pt-8">
                    {plan.features.map(feature => (
                      <div key={feature} className="flex gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-indigo-400" />
                        </div>
                        <span className="text-sm font-bold text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    fullWidth 
                    variant={plan.popular ? 'primary' : 'outline'} 
                    href="/contact"
                    icon={<ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                    className={plan.popular ? 'glossy-button' : 'border-white/10 text-white hover:bg-white/10 metallic-shine'}
                  >
                    {plan.cta}
                  </Button>
                </Card>
              </motion.div>
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
