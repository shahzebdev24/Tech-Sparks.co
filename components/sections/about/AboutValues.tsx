'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Award, Users } from 'lucide-react';
import { Card, Heading } from '@/components/ui';

export default function AboutValues() {
  const values = [
    {
      icon: Target,
      title: 'Quality Over Quantity',
      desc: 'We focus on building a few things exceptionally well rather than many things average.',
    },
    {
      icon: Award,
      title: 'Technical Precision',
      desc: 'Our engineering standards are non-negotiable. Clean, secure, and scalable always.',
    },
    {
      icon: Heart,
      title: 'Genuine Partnership',
      desc: 'We win when our clients win. We act as an extension of your own internal team.',
    },
    {
      icon: Users,
      title: 'Human-Centric',
      desc: 'We build for humans. Every line of code and every pixel serves the end-user.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((value, idx) => (
        <motion.div
          key={value.title}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
        >
          <Card variant="dark" className="h-full border-white/5 hover:border-white/10 transition-all duration-500 glossy-card group">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <value.icon className="w-6 h-6 text-indigo-400" />
            </div>
            <Heading level={4} className="font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors uppercase tracking-widest text-[10px]">{value.title}</Heading>
            <p className="text-gray-300 text-sm font-medium leading-relaxed">
              {value.desc}
            </p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
