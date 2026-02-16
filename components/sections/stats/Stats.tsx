'use client';

import { motion } from 'framer-motion';
import { Section, Container, Heading, Text } from '@/components/ui';

const stats = [
  { value: 'Verified', label: 'Engineering Standards', suffix: '' },
  { value: '100', label: 'Project Transparency', suffix: '%' },
  { value: 'Strategic', label: 'Partnership Model', suffix: '' },
  { value: 'Modern', label: 'Tech Infrastructure', suffix: '' },
];

export default function Stats() {
  return (
    <Section id="stats" bg="dark-cross" spacing="none">
      <div className="py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group p-6 sm:p-8 rounded-[2rem] bg-white/12 backdrop-blur-md border border-white/15 metallic-shine hover:bg-white/15 transition-all duration-500 text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter group-hover:text-indigo-400 transition-colors">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-indigo-300 font-bold uppercase tracking-[0.1em] sm:tracking-[0.3em] text-[10px] sm:text-xs">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </Section>
  );
}
