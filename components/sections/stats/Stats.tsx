'use client';

import { useSafeTheme } from '@/hooks/useSafeTheme';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section, Container, Heading, Text } from '@/components/ui';

const stats = [
  { 
    value: 'Verified', 
    label: 'Engineering Standards', 
    suffix: '',
    image: '/technichalexcellence.jpg'
  },
  { 
    value: '100', 
    label: 'Project Transparency', 
    suffix: '%',
    image: '/datadriven.jpeg'
  },
  { 
    value: 'Strategic', 
    label: 'Partnership Model', 
    suffix: '',
    image: '/partnership.jpeg'
  },
  { 
    value: 'Modern', 
    label: 'Tech Infrastructure', 
    suffix: '',
    image: '/agiledelivery.jpeg'
  },
];

export default function Stats() {
  const { isDark } = useSafeTheme();

  return (
    <Section id="stats" bg="none" spacing="none" className="relative overflow-hidden bg-[var(--section-bg)]">
      {/* Background - same image; gradient + black overlay only in dark; light: bg-black/20 */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/serviceambition.jpg"
          alt="Stats Background"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--section-bg)] via-transparent to-[var(--section-bg)] opacity-95"
          style={{ opacity: isDark ? 1 : 0, pointerEvents: isDark ? undefined : 'none' }}
        />
        <div
          className="absolute inset-0 bg-black/75"
          style={{ opacity: isDark ? 1 : 0, pointerEvents: isDark ? undefined : 'none' }}
        />
        {!isDark && <div className="absolute inset-0 bg-black/20 pointer-events-none" />}
      </div>

      <div className="relative py-24 lg:py-32 z-10">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group p-6 sm:p-8 rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/15 hover:border-gray-300 dark:hover:border-white/30 transition-all duration-500 text-center"
                style={
                  !isDark
                    ? { backgroundColor: '#ffffff' }
                    : {
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(20px)',
                      }
                }
              >
                {/* Hover Image Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <Image
                    src={stat.image}
                    alt={stat.label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 opacity-0 dark:opacity-100" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] mb-2 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-500">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="stats-card-label text-blue-800 dark:text-indigo-300 dark:group-hover:text-[var(--text-primary)] font-bold uppercase tracking-[0.1em] sm:tracking-[0.3em] text-[10px] sm:text-xs transition-colors duration-500">
                    {stat.label}
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-indigo-500/20 rounded-tr-[2rem] group-hover:border-indigo-400/60 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-500/20 rounded-bl-[2rem] group-hover:border-purple-400/60 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </Section>
  );
}
