'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Palette, Zap } from 'lucide-react';
import { Heading } from '@/components/ui';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-darker-bg)]">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        {/* Primary gradient orb */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 via-transparent to-transparent rounded-full blur-[140px] animate-pulse" />
        {/* Secondary orb */}
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/15 via-transparent to-transparent rounded-full blur-[120px]" />
        {/* Tertiary orb */}
        <div className="absolute -bottom-[10%] left-[10%] w-[600px] h-[600px] bg-indigo-700/10 via-transparent to-transparent rounded-full blur-[100px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Shining Grid Pulse Effect (Multi-Directional & Randomized) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Horizontal Grid Pulses (Left to Right) */}
          {[64, 320, 576, 832].map((top, i) => (
            <motion.div 
              key={`h-lr-${top}`}
              className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent"
              style={{ top: `${top}px` }}
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ 
                duration: 3 + (i % 3), 
                repeat: Infinity, 
                ease: "linear",
                delay: i * 2,
                repeatDelay: Math.random() * 5
              }}
            />
          ))}

          {/* Horizontal Grid Pulses (Right to Left) */}
          {[192, 448, 704].map((top, i) => (
            <motion.div 
              key={`h-rl-${top}`}
              className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"
              style={{ top: `${top}px` }}
              initial={{ x: '100%' }}
              animate={{ x: '-100%' }}
              transition={{ 
                duration: 4 + (i % 4), 
                repeat: Infinity, 
                ease: "linear",
                delay: i * 2.5,
                repeatDelay: Math.random() * 6
              }}
            />
          ))}

          {/* Vertical Grid Pulses (Top to Bottom) */}
          {[128, 448, 832, 1216].map((left, i) => (
            <motion.div 
              key={`v-tb-${left}`}
              className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-400/50 to-transparent"
              style={{ left: `${left}px` }}
              initial={{ y: '-100%' }}
              animate={{ y: '100%' }}
              transition={{ 
                duration: 5 + (i % 3), 
                repeat: Infinity, 
                ease: "linear",
                delay: i * 1.5,
                repeatDelay: Math.random() * 4
              }}
            />
          ))}

          {/* Vertical Grid Pulses (Bottom to Top) */}
          {[256, 640, 1024, 1408].map((left, i) => (
            <motion.div 
              key={`v-bt-${left}`}
              className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-purple-400/40 to-transparent"
              style={{ left: `${left}px` }}
              initial={{ y: '100%' }}
              animate={{ y: '-100%' }}
              transition={{ 
                duration: 4 + (i % 4), 
                repeat: Infinity, 
                ease: "linear",
                delay: i * 2.2,
                repeatDelay: Math.random() * 5
              }}
            />
          ))}
        </div>

        {/* Top gradient fade */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[var(--color-darker-bg)] to-transparent z-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 lg:py-40 w-full z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-indigo-300 font-bold text-sm backdrop-blur-md mb-8 metallic-shine">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
              </span>
              Software Development Agency — Karachi
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Heading
              level={1}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight !text-white mb-8"
            >
              Software development,{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                engineered to grow
              </span>{' '}
              your business
            </Heading>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We partner with startups, SMBs, and enterprises to design and build 
            custom web applications, SaaS platforms, and digital products that 
            drive real, measurable results.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-indigo-500/25 hover:shadow-xl transition-all duration-300 active:scale-[0.97] glossy-button"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-gray-300 rounded-2xl font-bold text-lg backdrop-blur-md hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 metallic-shine"
            >
              See Our Work
            </a>
          </motion.div>

          {/* Feature cards row */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              {
                icon: Code2,
                title: 'Precision Engineering',
                desc: 'Clean, tested, future-proof code',
              },
              {
                icon: Palette,
                title: 'Strategic Design',
                desc: 'Every pixel serves a purpose',
              },
              {
                icon: Zap,
                title: 'Measurable Results',
                desc: 'Growth you can track',
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                className="group flex flex-col items-center text-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              >
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:text-indigo-300 group-hover:bg-indigo-500/20 transition-all duration-300">
                  <feature.icon className="w-8 h-8" />
                </div>
                <div>
                  <Heading level={5} className="text-white font-bold mb-1 group-hover:text-indigo-200 transition-colors uppercase tracking-wider text-[11px]">{feature.title}</Heading>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 right-20 hidden xl:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sparkles className="w-6 h-6 text-purple-500/20" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-16 hidden xl:block"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-2 h-2 rounded-full bg-indigo-500/20" />
        </motion.div>
      </div>

      {/* Bottom gradient fade to maintain dark theme flow */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[var(--color-darker-bg)] to-transparent pointer-events-none" />
    </section>
  );
}
