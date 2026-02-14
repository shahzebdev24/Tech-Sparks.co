'use client';

import { motion } from 'framer-motion';

const plans = [
    {
        name: 'Starter',
        price: '₹49,999',
        subtext: 'One-time payment',
        features: [
            'Custom Website Design',
            'Up to 5 Pages',
            'Responsive Layout',
            'SEO Optimization',
            '3 Months Support'
        ],
        buttonText: 'Choose Plan',
        highlighted: false
    },
    {
        name: 'Professional',
        price: '₹1,49,999',
        subtext: 'One-time payment',
        features: [
            'Custom Web Application',
            'User Management System',
            'Database Integration',
            'Admin Dashboard',
            'API Development',
            '6 Months Support'
        ],
        buttonText: 'Choose Plan',
        highlighted: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        subtext: "Let's discuss",
        features: [
            'Full-Scale Solutions',
            'Unlimited Pages/Features',
            'Advanced Integrations',
            'Dedicated Team',
            'Priority Support',
            '12 Months Support'
        ],
        buttonText: 'Contact Us',
        highlighted: false
    }
];

import { Section, Container, Heading, Text, Badge, Card, Button } from '@/components/ui';
import { Check } from 'lucide-react';

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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <Card 
                                variant={plan.highlighted ? 'glass' : 'dark'} 
                                className={`flex flex-col items-center text-center p-10 h-full border-white/5 transition-all duration-500 group relative ${plan.highlighted ? 'scale-105 z-10 border-indigo-500/30' : 'hover:border-white/10'}`}
                            >
                                {plan.highlighted && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <Badge variant="primary" className="shadow-lg shadow-indigo-500/20">Most Popular</Badge>
                                    </div>
                                )}
                                
                                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-indigo-400 transition-colors uppercase tracking-widest text-[10px]">
                                    {plan.name}
                                </h3>

                                <div className="mb-2 transition-transform duration-500 group-hover:scale-110">
                                    <span className={`text-5xl font-black text-white`}>
                                        {plan.price}
                                    </span>
                                </div>
                                <p className="text-indigo-300 text-xs font-black uppercase tracking-[0.2em] mb-10 opacity-70">
                                    {plan.subtext}
                                </p>

                                <ul className="space-y-4 mb-12 w-full text-left">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-indigo-400" />
                                            </div>
                                            <span className="text-gray-400 text-sm font-medium leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto w-full">
                                    <Button 
                                        variant={plan.highlighted ? 'primary' : 'outline'} 
                                        fullWidth 
                                        className={plan.highlighted ? 'glossy-button' : 'border-white/10 text-white hover:bg-white/5'}
                                    >
                                        {plan.buttonText}
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
