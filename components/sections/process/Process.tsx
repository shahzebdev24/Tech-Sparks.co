'use client';

import { useState } from 'react';
import { useSafeTheme } from '@/hooks/useSafeTheme';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section, Container, Heading, Text, Badge, GradientText } from '@/components/ui';

const steps = [
  {
    title: 'Discovery & Strategy',
    description: 'We dive deep into your business goals and market landscape to build a roadmap for success.',
    color: 'from-blue-500 to-indigo-500',
    number: '01'
  },
  {
    title: 'Strategic Design',
    description: 'Crafting intuitive user experiences and high-impact visual identities that resonate.',
    color: 'from-indigo-500 to-purple-500',
    number: '02'
  },
  {
    title: 'Agile Development',
    description: 'Building robust, scalable applications with clean code and regular milestone updates.',
    color: 'from-purple-500 to-pink-500',
    number: '03'
  },
  {
    title: 'Deployment & Launch',
    description: 'Thorough testing and seamless deployment to high-performance infrastructure.',
    color: 'from-pink-500 to-rose-500',
    number: '04'
  },
  {
    title: 'Growth & Support',
    description: 'Post-launch optimization and ongoing support to ensure your product continues to scale.',
    color: 'from-rose-500 to-orange-500',
    number: '05'
  },
];

export default function Process() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const { isDark } = useSafeTheme();

  return (
    <Section id="process" bg="none" spacing="none" className={`relative overflow-hidden ${isDark ? 'bg-[#050510]' : 'bg-[var(--section-bg)]'}`}>
      {/* Background Image - same image both themes; overlays only in dark */}
      <div className="section-bg-wrapper absolute inset-0 w-full h-full z-0">
        <Image
          src="/digitalexcellence.jpg"
          alt="Process Background"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#050510] via-transparent to-[#050510] opacity-95"
          style={{ opacity: isDark ? 1 : 0, pointerEvents: isDark ? undefined : 'none' }}
        />
        <div
          className="absolute inset-0 bg-black/85"
          style={{ opacity: isDark ? 1 : 0, pointerEvents: isDark ? undefined : 'none' }}
        />
        {/* Light theme: subtle dark overlay */}
        {!isDark && <div className="absolute inset-0 bg-black/20 pointer-events-none" />}
      </div>

      {/* Background Ambience - dark only */}
      {isDark && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />
        </div>
      )}

      {/* Content with proper padding */}
      <div className="relative py-32 lg:py-48 z-10">
        <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="glass" dot animated className="mb-6 px-4 py-1.5 text-indigo-300">
            Our Methodology
          </Badge>
          <Heading level={2} className="text-5xl lg:text-7xl font-black !text-[var(--text-primary)] mb-6 leading-tight tracking-tighter">
            Architecting{' '}
            <GradientText variant="indigo-purple-pink" className="block lg:inline">
              Digital Excellence
            </GradientText>
          </Heading>
          <Text className="text-[var(--text-primary)]/50 text-xl max-w-2xl mx-auto leading-relaxed">
            A precision-engineered workflow designed to transform high-level 
            concepts into market-ready assets.
          </Text>
        </motion.div>

        {/* Improved Zig-Zag Grid (Desktop) */}
        <div className="relative hidden lg:grid grid-cols-5 gap-6 items-start">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={step.title}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`relative flex flex-col transition-all duration-700 ${isEven ? 'mt-0' : 'mt-24'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Vertical Highlight Line with Continuous Multi-Color Energy Stream */}
                <div className="w-[2px] h-16 mx-auto relative overflow-hidden mb-6 bg-white/[0.05] rounded-full">
                  <motion.div 
                    className="absolute inset-x-0 h-[400%] bg-gradient-to-b from-cyan-400 via-emerald-400 via-amber-400 via-rose-500 via-purple-600 via-indigo-600 via-blue-600 to-cyan-400"
                    initial={{ y: "-100%" }}
                    animate={hoveredStep === index ? { y: ["-75%", "0%"] } : { y: "-100%" }}
                    transition={hoveredStep === index ? { duration: 3, repeat: Infinity, ease: "linear" } : { duration: 0.5 }}
                  />
                  
                  {/* Subtle Interior Glow */}
                  {hoveredStep === index && (
                    <motion.div 
                      className="absolute inset-0 bg-white/10 blur-[2px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </div>

                <div
                  className={`p-8 rounded-[2.5rem] dark:bg-white/[0.03] backdrop-blur-3xl border border-gray-200 dark:border-white/10 group transition-all duration-500 hover:bg-gray-50 dark:hover:bg-white/[0.08] hover:border-gray-300 dark:hover:border-white/25 hover:shadow-2xl dark:hover:shadow-none ${hoveredStep === index ? '-translate-y-2' : ''}`}
                  style={!isDark ? { backgroundColor: '#ffffff' } : undefined}
                >
                  {/* Watermark Number */}
                  <span className="absolute top-4 right-8 font-serif italic text-6xl text-[var(--text-primary)]/[0.05] select-none pointer-events-none">
                    {step.number}
                  </span>

                  <span className={`block text-[10px] font-bold tracking-[0.3em] uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r ${step.color}`}>
                    Phase {step.number}
                  </span>
                  
                  <Heading level={4} className={`text-[var(--text-primary)] text-xl font-bold mb-4 tracking-tight transition-colors duration-500 ${hoveredStep === index ? 'text-indigo-300' : ''}`}>
                    {step.title}
                  </Heading>
                  
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Vertical Layout (Mobile/Tablet) */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-[2rem] dark:bg-white/[0.03] backdrop-blur-2xl border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-none hover:bg-gray-50 dark:hover:bg-white/[0.06] hover:border-gray-300 dark:hover:border-white/20 hover:shadow-2xl dark:hover:shadow-none transition-all duration-300"
              style={!isDark ? { backgroundColor: '#ffffff' } : undefined}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} p-[1px]`}>
                  <div className="w-full h-full rounded-[0.65rem] bg-gray-100 dark:bg-[#050510] flex items-center justify-center">
                    <span className="text-[var(--text-primary)] text-xs font-bold">{step.number}</span>
                  </div>
                </div>
                <Heading level={4} className="text-[var(--text-primary)] text-xl font-bold">
                  {step.title}
                </Heading>
              </div>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        </Container>
      </div>
    </Section>
  );
}
