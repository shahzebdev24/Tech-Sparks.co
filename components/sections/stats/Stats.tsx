'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}

const Counter = ({ end, duration = 2000, suffix = '', prefix = '' }: CounterProps) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            const easeOutQuad = percentage * (2 - percentage);
            const currentCount = Math.floor(easeOutQuad * end);

            setCount(currentCount);

            if (percentage < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
        <span ref={elementRef} className="tabular-nums">
            {prefix}{count}{suffix}
        </span>
    );
};

const stats = [
    { value: 150, suffix: '+', label: 'Projects Delivered' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 50, suffix: '+', label: 'Happy Clients' },
    { value: 24, suffix: '/7', label: 'Support Available' }
];

export default function Stats() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-[#1E293B] rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-[100px]"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className="text-4xl md:text-6xl font-extrabold text-white mb-3 tracking-tight group-hover:scale-110 transition-transform duration-500">
                                    {stat.value === 24 ? (
                                        <span className="tabular-nums">24/7</span>
                                    ) : (
                                        <Counter end={stat.value} suffix={stat.suffix} />
                                    )}
                                </div>
                                <div className="h-1 w-12 bg-indigo-500 mx-auto mb-4 rounded-full group-hover:w-20 transition-all duration-300"></div>
                                <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
