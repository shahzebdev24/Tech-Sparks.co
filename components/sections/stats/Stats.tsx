'use client';

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
  return (
    <Section id="stats" bg="none" spacing="none" className="relative overflow-hidden bg-[var(--color-darker-bg)]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/serviceambition.jpg"
          alt="Stats Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-darker-bg)] via-transparent to-[var(--color-darker-bg)] opacity-95" />
        <div className="absolute inset-0 bg-black/75" />
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
                className="relative group p-6 sm:p-8 rounded-[2rem] overflow-hidden border border-white/15 hover:border-white/30 transition-all duration-500 text-center"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Hover Image Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <Image
                    src={stat.image}
                    alt={stat.label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-500">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-indigo-300 group-hover:text-white font-bold uppercase tracking-[0.1em] sm:tracking-[0.3em] text-[10px] sm:text-xs transition-colors duration-500">
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
