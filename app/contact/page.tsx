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
    ArrowRight,
    Shield
} from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#F8FAFC] overflow-hidden pt-20">
            {/* Background Decorative elements - Theme consistency */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[120px] opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-purple-100 rounded-full blur-[140px] opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-12 md:py-24 relative z-10">
                {/* Header Section */}
                <div className="max-w-4xl mb-20 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 font-semibold text-sm">
                            <MessageSquare className="w-4 h-4" />
                            Get In Touch
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] text-[#1E293B] tracking-tight">
                            Let's Build Your{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    Next Big Idea
                                </span>
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-indigo-100/80 -z-10" viewBox="0 0 318 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 10.5C67.5 4.5 240 1 317 10.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-medium">
                            Whether you're a startup or an enterprise, we're here to help you scale. Drop us a message and we'll get back to you within 24 hours.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Contact Info & Benefits */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-indigo-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-[#1E293B]">Email Us</h4>
                                <p className="text-gray-500 font-medium text-sm">hello@techspark.com<br />support@techspark.com</p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-indigo-600">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-[#1E293B]">Call Us</h4>
                                <p className="text-gray-500 font-medium text-sm">+91 (800) 123-4567<br />Mon-Fri, 9am - 6pm</p>
                            </div>
                        </div>

                        <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl transition-transform group-hover:scale-150 duration-700" />

                            <h3 className="text-2xl font-bold mb-6">Why choose us?</h3>
                            <ul className="space-y-4">
                                {[
                                    { icon: Clock, text: 'Fast response under 24 hours' },
                                    { icon: Shield, text: 'Full IP & data security' },
                                    { icon: Globe, text: 'Global delivery & support' }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <item.icon className="w-5 h-5 text-indigo-200" />
                                        <span className="font-medium text-indigo-50">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-400" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-[#1E293B] font-bold text-sm">Join 500+ happy clients</p>
                                <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">Global & Growing</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white p-10 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-2xl shadow-indigo-500/5"
                    >
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#1E293B] ml-1 uppercase tracking-widest">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-medium text-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#1E293B] ml-1 uppercase tracking-widest">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-medium text-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#1E293B] ml-1 uppercase tracking-widest">Subject</label>
                                <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-medium text-sm appearance-none">
                                    <option>General Inquiry</option>
                                    <option>Project Proposal</option>
                                    <option>Partnership</option>
                                    <option>Technical Support</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#1E293B] ml-1 uppercase tracking-widest">Your Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Tell us about your project..."
                                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-medium text-sm resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-lg shadow-xl shadow-indigo-200 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group">
                                Send Message
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Locations Section */}
                <div className="mt-32 pt-20 border-t border-gray-100">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-[#1E293B] tracking-tight">Our Global Presence</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { city: 'London', address: '123 Tech City, East End, London' },
                            { city: 'New York', address: '456 Innovation St, Manhattan, NY' },
                            { city: 'Bangalore', address: '789 Digital Hub, Silicon Valley, KA' }
                        ].map((loc, i) => (
                            <div key={i} className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all text-center">
                                <MapPin className="w-8 h-8 text-indigo-500 mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-[#1E293B] mb-2">{loc.city}</h4>
                                <p className="text-gray-500 text-sm font-medium">{loc.address}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
