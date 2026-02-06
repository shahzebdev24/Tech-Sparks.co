'use client';

const steps = [
    {
        number: '1',
        title: 'Discovery & Planning',
        description: 'We understand your vision, goals, and requirements through detailed consultation and research.',
        gradient: 'from-indigo-500 to-indigo-700'
    },
    {
        number: '2',
        title: 'Design & Prototyping',
        description: 'Creating wireframes and high-fidelity designs that bring your ideas to life.',
        gradient: 'from-indigo-600 to-purple-700'
    },
    {
        number: '3',
        title: 'Development',
        description: 'Building your solution with clean code, best practices, and modern technologies.',
        gradient: 'from-purple-600 to-fuchsia-700'
    },
    {
        number: '4',
        title: 'Testing & QA',
        description: 'Rigorous testing across devices and browsers to ensure flawless performance.',
        gradient: 'from-fuchsia-600 to-pink-700'
    },
    {
        number: '5',
        title: 'Launch & Support',
        description: 'Smooth deployment and ongoing support to ensure your continued success.',
        gradient: 'from-rose-600 to-rose-800'
    }
];

export default function Process() {
    return (
        <section className="py-24 bg-[#ECEEFF] relative overflow-hidden font-sans">
            {/* Subtle background glow effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-purple-200/40 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[60%] h-[60%] bg-indigo-200/40 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2D2E3E] mb-4">
                        Our Development Process
                    </h2>
                    <p className="text-[#6B7280] text-lg font-medium opacity-80">
                        A proven methodology to deliver exceptional results
                    </p>
                </div>

                {/* Steps List */}
                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-8 md:gap-12 group"
                        >
                            {/* Number Circle */}
                            <div className="flex-shrink-0">
                                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-[0_15px_30px_-5px_rgba(79,70,229,0.3)] ring-8 ring-white/10 group-hover:scale-110 transition-transform duration-300`}>
                                    {step.number}
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="pt-2">
                                <h3 className="text-2xl font-bold text-[#2D2E3E] mb-2 tracking-tight group-hover:text-indigo-700 transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-[#4B5563] text-lg leading-relaxed max-w-2xl opacity-90">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
