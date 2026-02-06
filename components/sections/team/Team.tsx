'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Plus, Quote } from 'lucide-react';

const team = [
    {
        name: 'Arslan Ali',
        role: 'Founder & CEO',
        bio: 'Visionary architect behind Tech Spark. Bridging the gap between raw technology and market dominance.',
        image: '/image.png',
        social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
        name: 'Zeeshan Khan',
        role: 'CTO',
        bio: 'Scale-wizard. Orchestrating distributed systems that handle millions of requests without breaking a sweat.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&h=1000&auto=format&fit=crop',
        social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
        name: 'Usman Ghani',
        role: 'Design Director',
        bio: 'Aesthetic purist. Crafting sensory digital experiences that turn casual users into brand advocates.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&h=1000&auto=format&fit=crop',
        social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
        name: 'Hamza Sheikh',
        role: 'VP Engineering',
        bio: 'Code commander. Leading high-performance sprint cycles to deliver flawless engineering at speed.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&h=1000&auto=format&fit=crop',
        social: { twitter: '#', linkedin: '#', github: '#' }
    }
];

export default function Team() {
    return (
        <section id="team" className="py-40 bg-white relative overflow-hidden">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('/noise.svg')" }} />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Pro Header - Editorial / Gallery Style */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 bg-[#0F172A] text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-12"
                    >
                        The Architecture of Talent
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-end">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-9xl font-black text-[#0F172A] leading-[0.85] tracking-tighter"
                        >
                            The Team <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Selected.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl text-gray-400 font-medium leading-relaxed max-w-sm pb-2"
                        >
                            Custom-built teams for high-stakes projects. We only hire the top 1%.
                        </motion.p>
                    </div>
                </div>

                {/* Team Grid - Immersive Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative h-[500px] overflow-hidden rounded-[3rem] bg-gray-50"
                        >
                            {/* Image with Contrast Filter */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110 group-hover:blur-[6px]"
                            />

                            {/* Pro Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />

                            {/* Default View Content */}
                            <div className="absolute inset-0 p-12 flex flex-col justify-end text-white transition-opacity duration-500 group-hover:opacity-0">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-indigo-400">
                                    {member.role}
                                </p>
                                <h3 className="text-4xl font-black tracking-tighter leading-none mb-6">
                                    {member.name}
                                </h3>
                                <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20">
                                    <Plus className="w-6 h-6" />
                                </div>
                            </div>

                            {/* Hover Reveal Content (Bio & Socials) */}
                            <div className="absolute inset-0 p-12 bg-[#0F172A]/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-between text-white">
                                <div className="space-y-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                                    <Quote className="w-10 h-10 opacity-30 fill-white" />
                                    <p className="text-xl font-medium leading-relaxed italic">
                                        "{member.bio}"
                                    </p>
                                    <div className="h-[2px] w-20 bg-white/30" />
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Connect Professional</p>
                                        <div className="flex gap-4">
                                            <a href={member.social.linkedin} className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all">
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                            <a href={member.social.github} className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all">
                                                <Github className="w-5 h-5" />
                                            </a>
                                            <a href={member.social.twitter} className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all">
                                                <Twitter className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black tracking-tighter leading-none">{member.name}</h3>
                                        <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-60 mt-2">{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Trust Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-40 pt-20 border-t border-gray-100 flex flex-wrap gap-x-20 gap-y-12"
                >
                    <div className="space-y-2">
                        <p className="text-6xl font-black text-[#0F172A]">Top 1%</p>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Global Talent Pool Only</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-6xl font-black text-[#0F172A]">Ex-Tech</p>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">MAANG Background Experience</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
