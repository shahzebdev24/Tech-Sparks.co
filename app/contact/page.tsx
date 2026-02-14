'use client';

import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    MessageSquare,
    Send,
    Clock,
    Globe,
    Shield
} from 'lucide-react';
import { Section, Container } from '@/components/ui';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[var(--color-darker-bg)]">
            <Section bg="dark-ripple" spacing="lg" className="pt-20">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
                        {/* Left Side: Contact Info & Benefits */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-12"
                        >
                            <div className="max-w-4xl text-left">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="space-y-6"
                                >
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-indigo-300 font-bold text-sm backdrop-blur-md metallic-shine">
                                        <MessageSquare className="w-4 h-4" />
                                        Get In Touch
                                    </div>

                                    <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] text-white tracking-tight">
                                        Let's Build Your{' '}
                                        <span className="relative inline-block">
                                            <span className="relative z-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                                Next Big Idea
                                            </span>
                                        </span>
                                    </h1>

                                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl font-medium">
                                        Whether you're a startup or an enterprise, we're here to help you scale. Drop us a message and we'll get back to you within 24 hours.
                                    </p>
                                </motion.div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 shadow-lg border border-white/10 flex items-center justify-center text-indigo-400 metallic-shine">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white">Email Us</h4>
                                    <p className="text-gray-400 font-medium text-sm">techsparks.co@gmail.com</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 shadow-lg border border-white/10 flex items-center justify-center text-indigo-400 metallic-shine">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white">Call Us</h4>
                                    <p className="text-gray-400 font-medium text-sm">03408399014<br />Mon-Fri, 9am - 6pm</p>
                                </div>
                            </div>
                            
                        </motion.div>

                        {/* Right Side: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white/5 p-10 md:p-12 rounded-[3.5rem] border border-white/10 shadow-2xl backdrop-blur-md glossy-card"
                        >
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-gray-400 ml-1 uppercase tracking-widest">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-sm text-white placeholder-gray-500"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-gray-400 ml-1 uppercase tracking-widest">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-sm text-white placeholder-gray-500"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 ml-1 uppercase tracking-widest">Subject</label>
                                    <select className="w-full px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-sm appearance-none text-white cursor-pointer">
                                        <option className="bg-gray-900 text-white">General Inquiry</option>
                                        <option className="bg-gray-900 text-white">Project Proposal</option>
                                        <option className="bg-gray-900 text-white">Partnership</option>
                                        <option className="bg-gray-900 text-white">Technical Support</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 ml-1 uppercase tracking-widest">Your Message</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Tell us about your project..."
                                        className="w-full px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-sm resize-none text-white placeholder-gray-500"
                                    ></textarea>
                                </div>

                                <button className="w-full py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-indigo-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group glossy-button">
                                    Send Message
                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>

                    {/* Locations Section */}
                    <div className="mt-32 pt-20 border-t border-white/10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-extrabold text-white tracking-tight">Our Base</h2>
                        </div>
                        <div className="max-w-md mx-auto">
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-lg hover:shadow-indigo-500/5 transition-all text-center glossy-card">
                                <MapPin className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-white mb-2">Karachi</h4>
                                <p className="text-gray-400 text-sm font-medium">Pakistan</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
