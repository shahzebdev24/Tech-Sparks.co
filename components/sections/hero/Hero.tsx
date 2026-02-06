'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-[#F8FAFC] overflow-hidden pt-20">
            {/* Background Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[120px] opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-100 rounded-full blur-[140px] opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-12 md:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
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
                            Leading Product Agency
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-[#1E293B] tracking-tight">
                            Transforming Ideas into{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    Digital Reality
                                </span>
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-indigo-100/80 -z-10" viewBox="0 0 318 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 10.5C67.5 4.5 240 1 317 10.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                            We build premium software solutions that help businesses scale faster and deliver world-class user experiences.
                        </p>

                        <div className="flex flex-wrap gap-5 pt-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex items-center gap-2 px-8 py-4 bg-[#4F46E5] text-white rounded-2xl text-lg font-bold shadow-xl shadow-indigo-200/50 hover:bg-[#4338CA] transition-all"
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center gap-3 px-8 py-4 bg-white text-gray-700 rounded-2xl text-lg font-bold border border-gray-200 hover:border-indigo-200 hover:bg-gray-50 transition-all"
                            >
                                <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                                    <Play className="w-4 h-4 text-indigo-600 fill-indigo-600" />
                                </div>
                                View Portfolio
                            </motion.button>
                        </div>

                        {/* Trust markers */}
                        <div className="flex flex-wrap items-center gap-8 pt-6">
                            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                100+ Projects Done
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                99% Satisfaction
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Modern Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        {/* Main Abstract Card */}
                        <div className="relative z-10 bg-gradient-to-tr from-white to-gray-50/50 backdrop-blur-xl rounded-[3rem] p-4 shadow-2xl border border-white/40 overflow-hidden">
                            <div className="bg-[#1E293B] rounded-[2.5rem] p-8 md:p-12 aspect-[4/5] flex flex-col justify-between overflow-hidden relative group">
                                {/* Decorative grid background */}
                                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                                <div className="space-y-4 relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                                        ✨
                                    </div>
                                    <h3 className="text-3xl font-bold text-white">Scale and Innovate</h3>
                                    <p className="text-gray-400 text-lg">Next-gen digital products for modern enterprises.</p>
                                </div>

                                <div className="space-y-6 relative z-10">
                                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "85%" }}
                                            transition={{ duration: 2, delay: 1 }}
                                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                                        ></motion.div>
                                    </div>
                                    <div className="flex justify-between items-center bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
                                        <span className="text-white font-medium">Monthly Growth</span>
                                        <span className="text-green-400 font-bold">+28%</span>
                                    </div>
                                </div>

                                {/* Floating UI Elements inside */}
                                <motion.div
                                    animate={{
                                        y: [0, -15, 0],
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-1/2 -right-10 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl"
                                >
                                    <div className="flex gap-2">
                                        <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs">🚀</div>
                                        <div>
                                            <div className="w-12 h-2 bg-gray-400 rounded-full mb-1"></div>
                                            <div className="w-8 h-2 bg-gray-600 rounded-full"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Floating elements outside */}
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -left-10 w-24 h-24 bg-white rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center text-4xl z-20"
                        >
                            ⚛️
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-6 px-6 py-4 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 z-20"
                        >
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="font-bold text-[#1E293B]">Live Deployment</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
