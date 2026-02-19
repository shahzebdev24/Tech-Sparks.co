'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSafeTheme } from '@/hooks/useSafeTheme';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Palette, Zap } from 'lucide-react';
import { Heading, GradientText } from '@/components/ui';

export default function Hero() {
  const { isDark } = useSafeTheme();
  const heroCardStyle = isDark
    ? {
        backgroundColor: 'var(--hero-card-bg)',
        borderColor: 'var(--hero-card-border)',
        boxShadow: 'var(--hero-card-shadow)',
        backdropFilter: 'var(--hero-card-backdrop)',
        WebkitBackdropFilter: 'var(--hero-card-backdrop)',
      }
    : {
        backgroundColor: '#ffffff',
        borderColor: 'rgba(0,0,0,0.1)',
        boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
      };
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--section-bg)]">
      {/* Background Image with Overlay — theme-aware: light = less black, dark = current */}
      <div className="section-bg-wrapper absolute inset-0 z-0 dark:bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg"
          className="w-full h-full object-cover opacity-100 dark:opacity-80 object-center sm:object-left"
        >
          <source 
            src="/hero.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Theme-aware overlay only: light = less black (no tint), dark = current */}
        <div className="absolute inset-0" style={{ backgroundColor: 'var(--overlay-hero)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 lg:py-40 w-full z-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-indigo-600 dark:text-indigo-300 font-bold text-sm backdrop-blur-md mb-8 metallic-shine">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
              </span>
              Software Development Agency — Karachi
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Heading
              level={1}
              className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-[var(--text-primary)] mb-8"
            >
              Software development,{' '}
              <GradientText variant="indigo-via-purple-indigo">engineered</GradientText>{' '}
              to grow your business
            </Heading>
          </motion.div>

          {/* Description text */}
          <motion.p
            className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-xl mb-12 leading-relaxed font-medium"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We partner with startups, SMBs, and enterprises to design and build 
            custom web applications, SaaS platforms, and digital products that 
            drive real, measurable results.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-indigo-500/25 hover:shadow-xl transition-all duration-300 active:scale-[0.97] glossy-button"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              style={
                !isDark
                  ? { backgroundColor: '#ffffff', color: '#000000' }
                  : undefined
              }
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border-2 rounded-2xl font-bold text-lg transition-all duration-300 bg-white dark:bg-white/5 border-gray-300 dark:border-white/10 text-black dark:text-white shadow-xl dark:shadow-none hover:border-gray-400 dark:hover:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
            >
              See Our Work
            </Link>
          </motion.div>

          {/* Feature cards row */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              {
                icon: Code2,
                title: 'Precision Engineering',
                desc: 'Clean, future-proof code architected for scale.',
              },
              {
                icon: Palette,
                title: 'Strategic Design',
                desc: 'Pixel-perfect UI/UX that converts visitors.',
              },
              {
                icon: Zap,
                title: 'Scalable Growth',
                desc: 'Future-ready tech stack built for performance.',
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                className="relative flex flex-col items-start p-6 rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-none"
                style={{
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  ...heroCardStyle,
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              >
                <div className="relative p-2 rounded-xl bg-indigo-500/10 text-indigo-400 mb-4">
                  <feature.icon className="w-5 h-5" />
                </div>
                
                <div className="relative">
                  <Heading 
                    level={6} 
                    className="text-[var(--text-primary)] font-bold mb-2 text-base sm:text-lg"
                  >
                    {feature.title}
                  </Heading>
                  <p className="text-[var(--text-secondary)] text-sm sm:text-xs leading-relaxed font-medium">
                    {feature.desc}
                  </p>
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

      {/* Bottom fade: dark only (light mode uses transparent so no white bar) */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[var(--section-fade)] to-transparent pointer-events-none" />
    </section>
  );
}
