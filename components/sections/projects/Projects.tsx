'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, Cpu, Globe, Rocket, Sparkles } from 'lucide-react';

const projects = [
    {
        title: 'Nexus E-Commerce',
        category: 'Next-Gen Retail',
        impact: '+142%',
        metric: 'Conversion Boost',
        description: 'A headless commerce engine built for global scale. We implemented an edge-cached catalog and instant-checkout system that redefined $100M+ revenue streams.',
        image: '/ecommerce_project_mockup_1770396393410.png',
        tech: ['Next.js', 'Stripe', 'Redis', 'Tailwind'],
        icon: Globe
    },
    {
        title: 'Quantum SaaS',
        category: 'Enterprise Analytics',
        impact: '0.4ms',
        metric: 'Data Latency',
        description: 'Real-time infrastructure monitoring for Fortune 500 companies. Featuring predictive AI alerts and deep-link diagnostics across distributed systems.',
        image: '/saas_dashboard_mockup_1770396419360.png',
        tech: ['TypeScript', 'FastAPI', 'AWS', 'TensorFlow'],
        icon: Cpu
    },
    {
        title: 'HealthSync Portal',
        category: 'Digital Healthcare',
        impact: '12k',
        metric: 'Active Patients',
        description: 'HIPAA-compliant patient gateway. We automated appointment scheduling and secure telemetry synchronization across 50+ clinics nationwide.',
        image: '/healthcare_portal_mockup_1770396434998.png',
        tech: ['React', 'Firebase', 'Socket.io', 'Auth0'],
        icon: Rocket
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-40 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header - Editorial Style */}
                <div className="mb-32 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-[#0F172A] text-white rounded-full text-xs font-black uppercase tracking-[0.3em]"
                    >
                        <Sparkles className="w-4 h-4 text-indigo-400" />
                        Selected Productions
                    </motion.div>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-8xl font-black text-[#0F172A] leading-[0.9] tracking-tighter"
                        >
                            We build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Digital Value.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xl text-gray-500 font-medium max-w-sm leading-relaxed"
                        >
                            Our work exists at the intersection of flawless engineering and strategic design. Every pixel serves a purpose.
                        </motion.p>
                    </div>
                </div>

                {/* Immersive Projects Stack */}
                <div className="space-y-40">
                    {projects.map((project, index) => (
                        <ProjectRow key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectRow({ project, index }: { project: any, index: number }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <div
            ref={containerRef}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}
        >
            {/* Image Section - Immersive/Floating */}
            <div className="flex-1 w-full group relative">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.21, 0.45, 0.32, 0.9] }}
                    className="relative aspect-[16/10] overflow-hidden rounded-[4rem] bg-gray-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] group-hover:shadow-[0_80px_150px_-30px_rgba(79,70,229,0.2)] transition-all duration-700"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Floating Info Overlay */}
                    <div className="absolute top-10 left-10 z-10">
                        <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-6 rounded-[2rem] shadow-2xl transition-all group-hover:bg-indigo-600 group-hover:text-white">
                            <project.icon className="w-8 h-8" />
                        </div>
                    </div>
                </motion.div>

                {/* Parallax Background Text */}
                <motion.div
                    style={{ y }}
                    className="absolute -z-10 -top-20 -left-10 lg:-left-20 text-[12rem] font-black text-gray-50 select-none hidden lg:block"
                >
                    0{index + 1}
                </motion.div>
            </div>

            {/* Content Section - Editorial Details */}
            <div className="flex-1 w-full space-y-10 py-10">
                <div className="space-y-4">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-indigo-600 font-black uppercase tracking-[0.3em] text-sm"
                    >
                        {project.category}
                    </motion.p>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tighter"
                    >
                        {project.title}
                    </motion.h3>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-xl text-gray-500 font-medium leading-relaxed"
                >
                    {project.description}
                </motion.p>

                {/* Dynamic Metrics Bar */}
                <div className="flex gap-12 py-8 border-y border-gray-100">
                    <div>
                        <p className="text-4xl font-black text-[#0F172A] mb-1">{project.impact}</p>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{project.metric}</p>
                    </div>
                    <div>
                        <p className="text-4xl font-black text-[#0F172A] mb-1">Elite</p>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Delivery Grade</p>
                    </div>
                </div>

                {/* Tech & Action */}
                <div className="flex flex-wrap items-center justify-between gap-8 pt-6">
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t: string) => (
                            <span key={t} className="px-4 py-2 bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-widest rounded-xl border border-gray-100">
                                {t}
                            </span>
                        ))}
                    </div>
                    <button className="group/btn flex items-center gap-3 bg-[#0F172A] text-white pl-8 pr-4 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-600 transition-all hover:scale-105">
                        Deep Dive
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-indigo-600 transition-all">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
