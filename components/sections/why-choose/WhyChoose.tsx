'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Sparkles, TrendingUp, Headphones, Layers } from 'lucide-react';

export default function WhyChoose() {
    const features = [
        {
            icon: Zap,
            title: 'Ultra-Fast Performance',
            description: 'Optimized architectures that ensure your product is blazing fast.',
            color: 'text-amber-500',
            bg: 'bg-amber-50'
        },
        {
            icon: Shield,
            title: 'Security First',
            description: 'Enterprise-grade protection built into every layer of your application.',
            color: 'text-green-500',
            bg: 'bg-green-50'
        },
        {
            icon: Sparkles,
            title: 'Modern UI/UX',
            description: 'Beautiful, intuitive designs that your users will actually love.',
            color: 'text-purple-500',
            bg: 'bg-purple-50'
        },
        {
            icon: TrendingUp,
            title: 'Built for Scale',
            description: 'Infrastructure that grows seamlessly with your business needs.',
            color: 'text-blue-500',
            bg: 'bg-blue-50'
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Content and features */}
                    <div className="order-2 lg:order-1">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 block"
                        >
                            The Tech Sparks Edge
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-8 leading-tight font-sans"
                        >
                            Why Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Trust Us</span> To Deliver
                        </motion.h2>

                        <div className="grid sm:grid-cols-2 gap-8 pt-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                    className="group"
                                >
                                    <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                        <feature.icon className={`w-7 h-7 ${feature.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1E293B] mb-2">{feature.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Premium Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="relative z-10 p-8 bg-[#F8FAFC] rounded-[4rem] border border-gray-100 shadow-inner">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-6">
                                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50 flex flex-col items-center text-center">
                                        <span className="text-3xl font-extrabold text-[#1E293B]">98%</span>
                                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Efficiency</span>
                                    </div>
                                    <div className="bg-indigo-600 p-8 rounded-3xl shadow-xl shadow-indigo-200 text-white flex flex-col items-center text-center">
                                        <Headphones className="w-8 h-8 mb-4" />
                                        <span className="text-2xl font-bold">24/7</span>
                                        <span className="text-[10px] opacity-80 font-bold uppercase tracking-widest">Support</span>
                                    </div>
                                </div>
                                <div className="space-y-6 pt-12">
                                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-50 flex flex-col items-center text-center group hover:bg-indigo-50 transition-colors">
                                        <Layers className="w-8 h-8 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
                                        <span className="text-2xl font-bold text-[#1E293B]">100+</span>
                                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Delivered</span>
                                    </div>
                                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50 flex flex-col items-center text-center">
                                        <span className="text-3xl font-extrabold text-green-500">4.9/5</span>
                                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Rating</span>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Blobs */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl -z-10 opacity-60 animate-pulse"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
