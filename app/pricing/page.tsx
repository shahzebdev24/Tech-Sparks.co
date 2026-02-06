'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, HelpCircle, Zap, Shield, Sparkles } from 'lucide-react';

const plans = [
    {
        name: 'Starter',
        price: '₹49,999',
        subtext: 'One-time payment',
        description: 'Perfect for startups and small businesses looking to establish a strong online presence.',
        features: [
            'Custom Website Design',
            'Up to 5 Pages',
            'Responsive Layout',
            'SEO Optimization',
            '3 Months Support',
            'Social Media Integration'
        ],
        buttonText: 'Choose Starter',
        highlighted: false,
        icon: Zap
    },
    {
        name: 'Professional',
        price: '₹1,49,999',
        subtext: 'One-time payment',
        description: 'Comprehensive digital solutions for growing companies needing advanced functionality.',
        features: [
            'Custom Web Application',
            'User Management System',
            'Database Integration',
            'Admin Dashboard',
            'API Development',
            '6 Months Support',
            'Performance Optimization'
        ],
        buttonText: 'Get Professional',
        highlighted: true,
        icon: Sparkles
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        subtext: "Let's discuss",
        description: 'Full-scale enterprise solutions with dedicated resources and priority infrastructure.',
        features: [
            'Full-Scale Solutions',
            'Unlimited Pages/Features',
            'Advanced Integrations',
            'Dedicated Team',
            'Priority Support',
            '12 Months Support',
            'Custom Security Audits'
        ],
        buttonText: 'Contact Us',
        highlighted: false,
        icon: Shield
    }
];

const faqs = [
    {
        question: "How long does a typical project take?",
        answer: "Starter projects usually take 2-3 weeks, while Professional and Enterprise solutions can take 6-12 weeks depending on complexity."
    },
    {
        question: "Do you offer maintenance after launch?",
        answer: "Yes, every plan includes a support period. We also offer dedicated maintenance retainers for long-term growth."
    },
    {
        question: "Can I upgrade my plan later?",
        answer: "Absolutely! You can scale your solution as your business grows. We'll simply adjust the scope and pricing accordingly."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, bank transfers, and digital wallets. We usually follow a 50% upfront and 50% on completion model."
    }
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-[#F8FAFC] overflow-hidden pt-20">
            {/* Background Decorative elements - Theme consistency */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[120px] opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-purple-100 rounded-full blur-[140px] opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-12 md:py-24 relative z-10">
                {/* Header - Matching Home Style */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 font-semibold text-sm mx-auto">
                            <Sparkles className="w-4 h-4" />
                            Transparent Pricing
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] text-[#1E293B] tracking-tight">
                            Scalable Plans for{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    Every Vision
                                </span>
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-indigo-100/80 -z-10" viewBox="0 0 318 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 10.5C67.5 4.5 240 1 317 10.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                            No hidden fees. No complicated contracts. Just world-class engineering delivered at a price that makes sense for your growth.
                        </p>
                    </motion.div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex flex-col bg-white rounded-[2.5rem] p-10 border transition-all duration-500 hover:-translate-y-2 ${plan.highlighted
                                    ? 'border-indigo-600 shadow-2xl shadow-indigo-500/20 relative z-10'
                                    : 'border-gray-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5'
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-indigo-600 text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${plan.highlighted ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600'}`}>
                                    <plan.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#1E293B] mb-2">{plan.name}</h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mb-10">
                                <div className="flex items-baseline gap-1">
                                    <span className={`text-5xl font-black ${plan.highlighted ? 'text-indigo-600' : 'text-[#1E293B]'}`}>
                                        {plan.price}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-2">{plan.subtext}</p>
                            </div>

                            <div className="space-y-4 mb-12 flex-grow">
                                <p className="text-[#1E293B] font-bold text-xs uppercase tracking-widest">Everything in {plan.name}:</p>
                                {plan.features.map((feature, fIndex) => (
                                    <div key={fIndex} className="flex items-center gap-3">
                                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.highlighted ? 'bg-indigo-100 text-indigo-600' : 'bg-green-50 text-green-600'}`}>
                                            <Check className="w-3 h-3 stroke-[3px]" />
                                        </div>
                                        <span className="text-gray-600 text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2 group ${plan.highlighted
                                    ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200 hover:bg-indigo-700'
                                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                                }`}>
                                {plan.buttonText}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto py-24 border-t border-gray-100">
                    <div className="text-center mb-16">
                        <HelpCircle className="w-12 h-12 text-indigo-600 mx-auto mb-6 opacity-20" />
                        <h2 className="text-4xl font-extrabold text-[#1E293B] tracking-tight">Got Questions?</h2>
                        <p className="text-gray-500 font-medium mt-4">Frequently asked questions about our pricing and process.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <h4 className="text-lg font-bold text-[#1E293B]">{faq.question}</h4>
                                <p className="text-gray-600 leading-relaxed text-sm font-medium">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 p-12 md:p-20 bg-[#0F172A] rounded-[3.5rem] text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                            Still Not Sure?
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto font-medium">
                            Every project is unique. If our standard plans don't fit your needs, let's talk and build a custom package just for you.
                        </p>
                        <button className="px-12 py-5 bg-white text-[#0F172A] rounded-2xl font-black text-xl hover:bg-indigo-400 hover:text-white transition-all transform hover:scale-105 shadow-2xl shadow-indigo-500/20">
                            Book a Strategy Call
                        </button>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
