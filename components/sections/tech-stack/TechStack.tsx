'use client';

import { motion } from 'framer-motion';

const technologies = [
    { icon: '⚛️', name: 'React', color: 'bg-blue-50' },
    { icon: '📱', name: 'Mobile', color: 'bg-indigo-50' },
    { icon: '🔷', name: 'TypeScript', color: 'bg-blue-50' },
    { icon: '🟢', name: 'Node.js', color: 'bg-green-50' },
    { icon: '🐍', name: 'Python', color: 'bg-yellow-50' },
    { icon: '☁️', name: 'Cloud', color: 'bg-sky-50' },
    { icon: '🗄️', name: 'Database', color: 'bg-slate-50' },
    { icon: '🔥', name: 'Firebase', color: 'bg-orange-50' },
    { icon: '📊', name: 'Analytics', color: 'bg-rose-50' },
    { icon: '🎨', name: 'Design', color: 'bg-pink-50' },
    { icon: '⚡', name: 'Performance', color: 'bg-amber-50' },
    { icon: '🔐', name: 'Security', color: 'bg-teal-50' }
];

export default function TechStack() {
    return (
        <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
            {/* Ambient Background elements */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] -z-10 opacity-60"></div>
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-50 rounded-full blur-[120px] -z-10 opacity-60"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 block"
                    >
                        Our Technology Stack
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-6"
                    >
                        Built with Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Technologies</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-500 text-lg max-w-2xl mx-auto font-medium"
                    >
                        We use the latest and most stable technologies to ensure your product is fast, secure, and scalable.
                    </motion.p>
                </div>

                {/* Tech Grid */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 shadow-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border border-gray-100/50 bg-white/50 backdrop-blur-sm rounded-[3rem] p-8 md:p-12 gap-8 md:gap-12">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -8, scale: 1.05 }}
                                className="group flex flex-col items-center justify-center gap-4 py-4"
                            >
                                <div className={`w-20 h-20 shadow-sm ${tech.color} rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:rotate-6 group-hover:shadow-xl`}>
                                    <span className="text-4xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        {tech.icon}
                                    </span>
                                </div>
                                <span className="text-sm font-bold text-gray-500 group-hover:text-[#1E293B] transition-colors tracking-wide">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
