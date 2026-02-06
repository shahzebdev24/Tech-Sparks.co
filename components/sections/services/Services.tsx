'use client';

import { motion } from 'framer-motion';
import {
    Globe,
    Briefcase,
    Users,
    ShoppingCart,
    Smartphone,
    Settings,
    ArrowRight,
    SearchCode,
    Layers,
    Terminal,
    Palette
} from 'lucide-react';

const services = [
    {
        icon: Globe,
        title: 'Bespoke Ecosystems',
        description: 'We don\'t just build sites; we architect digital homes that breathe your brand identity.',
        tags: ['Architecture', 'Scaling'],
        color: 'from-blue-500/20 to-indigo-500/20'
    },
    {
        icon: Terminal,
        title: 'Advanced SaaS',
        description: 'Complex logic delivered through intuitive interfaces. Built for high-stakes enterprise operation.',
        tags: ['Security', 'Cloud'],
        color: 'from-purple-500/20 to-fuchsia-500/20'
    },
    {
        icon: Palette,
        title: 'Elite UI/UX',
        description: 'Immersive designs that captivate. We focus on sensory experiences that drive emotional connection.',
        tags: ['Motion', 'Brand'],
        color: 'from-rose-500/20 to-orange-500/20'
    },
    {
        icon: ShoppingCart,
        title: 'Headless Global Commerce',
        description: 'Sub-second page speeds with global currency and logistics integration at the core.',
        tags: ['Conversion', 'Web3'],
        color: 'from-emerald-500/20 to-teal-500/20'
    },
    {
        icon: Layers,
        title: 'Micro-Services',
        description: 'Decoupled, high-availability backends that grow as your user base explodes.',
        tags: ['Kubernetes', 'Go'],
        color: 'from-cyan-500/20 to-sky-500/20'
    },
    {
        icon: Smartphone,
        title: 'Native-Grade PWA',
        description: 'The power of a native app with the reach of the web. Fully offline and lightning fast.',
        tags: ['Performance', 'Mobile'],
        color: 'from-indigo-500/20 to-violet-500/20'
    }
];

export default function Services() {
    return (
        <section id="services" className="py-40 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Pro Header - Minimalist but Impactful */}
                <div className="grid lg:grid-cols-2 gap-16 mb-24 items-end">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-6xl md:text-8xl font-black text-[#0F172A] leading-none tracking-tighter mb-8">
                            Our <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Mastery.</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-400 font-medium leading-relaxed pb-2"
                    >
                        We push the boundaries of what's possible on the web. Explore our range of ultra-high-end digital services.
                    </motion.p>
                </div>

                {/* Services Bento-Style Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative h-[450px] overflow-hidden rounded-[3rem] border border-gray-100 bg-white p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10"
                        >
                            {/* Decorative Background Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            <div className="relative z-10 h-full flex flex-col">
                                {/* Icon Header */}
                                <div className="mb-10">
                                    <div className="w-20 h-20 rounded-3xl bg-[#0F172A] text-white flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-500 shadow-2xl">
                                        <service.icon className="w-10 h-10" />
                                    </div>
                                </div>

                                {/* Title & Tags */}
                                <h3 className="text-3xl font-black text-[#0F172A] mb-4 tracking-tighter">
                                    {service.title}
                                </h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Description */}
                                <p className="text-gray-500 font-medium leading-relaxed mb-auto">
                                    {service.description}
                                </p>

                                {/* Bottom Action - Pro Style */}
                                <div className="pt-8 border-t border-gray-50 flex items-center justify-between group-hover:border-indigo-100 transition-colors">
                                    <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-300 group-hover:text-indigo-600 transition-colors">Inquire Service</span>
                                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-indigo-600 group-hover:text-white transition-all transform group-hover:rotate-45">
                                        <ArrowRight className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
