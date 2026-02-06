'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    ExternalLink,
    Github,
    Code2,
    Layers,
    Smartphone,
    Rocket,
    ArrowRight,
    CheckCircle
} from 'lucide-react';

const projects = [
    {
        title: 'Nexus E-Commerce',
        category: 'Fashion & Retail',
        description: 'A high-performance online shopping experience built with Next.js and Stripe.',
        image: '/ecommerce_project_mockup_1770396393410.png',
        tags: ['React', 'Next.js', 'Tailwind', 'Stripe'],
        link: '#',
        icon: Smartphone
    },
    {
        title: 'Quantum SaaS',
        category: 'Analytics & Reporting',
        description: 'Enterprise-grade dashboard for real-time data visualization and team collaboration.',
        image: '/saas_dashboard_mockup_1770396419360.png',
        tags: ['TypeScript', 'Node.js', 'D3.js', 'PostgreSQL'],
        link: '#',
        icon: Layers
    },
    {
        title: 'HealthSync Portal',
        category: 'Medical & Wellness',
        description: 'Secure patient management system with end-to-end encryption.',
        image: '/healthcare_portal_mockup_1770396434998.png',
        tags: ['Firebase', 'React', 'Cloud Functions', 'MUI'],
        link: '#',
        icon: Rocket
    },
    {
        title: 'PropTech Pro',
        category: 'Property Management',
        description: 'Real estate platform featuring virtual tours and automated lead management.',
        image: '/real_estate_mockup_1770396452154.png',
        tags: ['Python', 'Django', 'AWS', 'Mapbox'],
        link: '#',
        icon: Code2
    },
    {
        title: 'EduFlow LMS',
        category: 'Education & Training',
        description: 'Comprehensive learning management system for schools and corporate training.',
        image: '/learning_management_mockup_1770396465519.png',
        tags: ['PHP', 'Laravel', 'Vue.js', 'MySQL'],
        link: '#',
        icon: Smartphone
    },
    {
        title: 'FinNova Dashboard',
        category: 'FinTech Solution',
        description: 'Crypto-enabled financial dashboard with instant transaction tracking.',
        image: '/financial_dashboard_mockup_1770396481122.png',
        tags: ['Go', 'Redis', 'React', 'Web3'],
        link: '#',
        icon: Layers
    }
];

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-[#F8FAFC] overflow-hidden pt-20">
            {/* Background Decorative elements - Same as Hero */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[120px] opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-purple-100 rounded-full blur-[140px] opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-12 md:py-24 relative z-10">
                {/* Header - Matching Hero Style */}
                <div className="max-w-4xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 font-semibold text-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            Our Success Stories
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-[#1E293B] tracking-tight">
                            Showcasing Our{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    Digital Legacy
                                </span>
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-indigo-100/80 -z-10" viewBox="0 0 318 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 10.5C67.5 4.5 240 1 317 10.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-medium">
                            Explore our curated collection of high-impact digital products. From disruptive startups to enterprise solutions, we build for the future.
                        </p>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2">
                                {/* Image Viewport */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <div className="bg-white/90 backdrop-blur px-6 py-2 rounded-full shadow-xl">
                                            <span className="text-indigo-600 font-bold text-sm">View Details</span>
                                        </div>
                                    </div>

                                    {/* Floating Category Tag */}
                                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-[#1E293B] shadow-sm">
                                        {project.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-[#1E293B] mb-3 group-hover:text-indigo-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, tIndex) => (
                                            <span key={tIndex} className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest px-3 py-1 bg-indigo-50 rounded-lg border border-indigo-100">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center justify-between pt-6 border-t border-gray-50 uppercase tracking-widest font-black text-[10px]">
                                        <button className="flex items-center gap-2 text-[#1E293B] hover:text-indigo-600 transition-colors">
                                            Case Study
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                        <div className="flex gap-4">
                                            <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                                                <Github className="w-5 h-5" />
                                            </button>
                                            <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                                                <ExternalLink className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final CTA - Matching Logo/Theme colors */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 p-12 md:p-20 bg-white rounded-[3rem] border border-gray-100 shadow-xl shadow-indigo-500/5 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-[80px]" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-[80px]" />

                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-6 relative z-10 tracking-tight">
                        Let's Build Something <br />
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Extraordinary</span>
                    </h2>
                    <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto relative z-10 font-medium">
                        Have a groundbreaking idea? Our team of experts is ready to transform it into a world-class digital reality.
                    </p>
                    <button className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200 transition-all hover:scale-105 active:scale-95 relative z-10">
                        Start Your Project
                    </button>
                </motion.div>
            </div>
        </main>
    );
}
